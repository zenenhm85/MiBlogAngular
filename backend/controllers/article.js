'use strict'

var validator = require('validator');
var fs = require('fs');
var path = require('path');


var Article = require('../models/article');


var controller = {
    save: function(req,res){
        //Recoger parámetros por POST
        var params = req.body;

        //Realizar validaciones con Validator
        try{
            var validate_title = !validator.isEmpty(params.title);
            var validate_content = !validator.isEmpty(params.content);


        }
        catch(err){
            return res.status(200).send(
                {
                    status:'error',
                    message:'Faltan datos por enviar!!!'           
                }        
            );
        }
        if(validate_title && validate_content){

            //Crear objeto a Guardar
            var article = new Article();
            article.title = params.title;
            article.content = params.content;
            if(params.image){
                article.image = params.image;
            }
            else{
                article.image = null;
            }
            

            //Guardar el objeto(articulo)
            article.save(function(err,articleStored){

                if(err || !articleStored){
                    return res.status(404).send(
                        {
                            status:'error',
                            message:"El artículo no se ha guardado!!!"           
                        }        
                    );
                }
                //DEvolver respuesta positiva si no hay problemas
                return res.status(200).send(
                    {
                        status:'success',
                        article: articleStored         
                    }        
                );
            });            
        }
        else{
            return res.status(200).send(
                {
                    status:'error',
                    message:"Datos no válidos!!!"           
                }        
            );
        }       
    },//End Save
    getArticles:function(req,res){

        var query = Article.find({});

        var last = req.params.last;

        if(last || last != undefined){
            query.limit(parseInt(last));
        }
        //Utilizando Find del modelo Article  
        query.sort('-_id').exec(function(err,articles){
            if(err){
                return res.status(500).send(
                    {
                        status:'error',
                        message:"Error al devolver los artículos!!!"           
                    }        
                );
            }
            if(!articles){
                return res.status(404).send(
                    {
                        status:'error',
                        message:"NO hay artículos para devolver!!!"           
                    }        
                );
            }
            return res.status(200).send(
                {
                    status:'success',
                    articles: articles         
                }        
            );
        });   

    },//End getArticles
    getArticle:function(req,res){//Este método devuelve un artículo por el id *************
        //Recoger el id de la URL
        var articleId = req.params.id;

        //Comprobar que existe
        if(!articleId || articleId == null || articleId == undefined){
            return res.status(404).send(
                {
                    status:'error',
                    message:"Necesitamos el Id de un artículo para la búsqueda!!!"           
                }        
            );
        }
        //Buscar el artículo
        Article.findById(articleId,function(err,article){
            if(err ||!article){
                return res.status(404).send(
                    {
                        status:'error',
                        message:"No existe un artículo con este Id!!!"           
                    }        
                );
            }
            
            //Devolviendo el JSON
            return res.status(200).send(
                {
                    status:'success',
                    article         
                }        
            );

        });


    },//End getArticle (devuelve un único artículo por el ID)
    update:function(req,res){
         // Recoger el id del articulo por la url
         var articleId = req.params.id;

         // Recoger los datos que llegan por put en el cuerpo del request
         var params = req.body;
 
         // Validar datos
         try{
             var validate_title = !validator.isEmpty(params.title);
             var validate_content = !validator.isEmpty(params.content);
         }catch(err){
             return res.status(200).send({
                 status: 'error',
                 message: 'Faltan datos por enviar !!!'
             }); 
         }
 
         if(validate_title && validate_content){
              // Find and update
              Article.findOneAndUpdate({_id: articleId}, params, {new:true}, (err, articleUpdated) => {
                 if(err){
                     return res.status(500).send({
                         status: 'error',
                         message: 'Error al actualizar !!!'
                     });
                 }
 
                 if(!articleUpdated){
                     return res.status(404).send({
                         status: 'error',
                         message: 'No existe el articulo !!!'
                     });
                 }
 
                 return res.status(200).send({
                     status: 'success',
                     article: articleUpdated
                 });
              });
         }else{
              // Devolver respuesta
             return res.status(200).send({
                 status: 'error',
                 message: 'La validación no es correcta !!!'
             });
         }
    },//End de update
    delete: function(req, res){
        // Recoger el id de la url
        var articleId = req.params.id;

        // Find and delete        
        Article.findOneAndDelete({_id: articleId}, function(err, articleRemoved){
            if(err){
                return res.status(500).send({
                    status: 'error',
                    message: 'Error al borrar !!!'
                });
            }

            if(!articleRemoved){
                return res.status(404).send({
                    status: 'error',
                    message: 'No se ha borrado el articulo, posiblemente no exista !!!'
                });
            }

            return res.status(200).send({
                status: 'success',
                article: articleRemoved
            });

        }); 
    },//End delete
    upload: function(req, res){
        // Configurar el modulo connect multiparty router/article.js (hecho)

        // Recoger el fichero de la petición
        var file_name = 'Imagen no subida...';

        if(!req.files){
            return res.status(404).send({
                status: 'error',
                message: file_name
            });
        }

        // Conseguir nombre y la extensión del archivo
        var file_path = req.files.file0.path;
        var file_split = file_path.split('\\');

        // * ADVERTENCIA * EN LINUX O MAC
        // var file_split = file_path.split('/');

        // Nombre del archivo
        var file_name = file_split[2];

        // Extensión del fichero
        var extension_split = file_name.split('\.');
        var file_ext = extension_split[1];

        // Comprobar la extension, solo imagenes, si es valida borrar el fichero
        if(file_ext != 'png' && file_ext != 'jpg' && file_ext != 'jpeg' && file_ext != 'gif'){
            
            // borrar el archivo subido
            fs.unlink(file_path, function(err){
                return res.status(200).send({
                    status: 'error',
                    message: 'La extensión de la imagen no es válida !!!'
                });
            });
        
        }else{
             // Si todo es valido, sacando id de la url
             var articleId = req.params.id;

             if(articleId){
                // Buscar el articulo, asignarle el nombre de la imagen y actualizarlo
                Article.findOneAndUpdate({_id: articleId}, {image: file_name}, {new:true}, function(err, articleUpdated){

                    if(err || !articleUpdated){
                        return res.status(200).send({
                            status: 'error',
                            message: 'Error al guardar la imagen de articulo !!!'
                        });
                    }

                    return res.status(200).send({
                        status: 'success',
                        article: articleUpdated
                    });
                });
             }else{
                return res.status(200).send({
                    status: 'success',
                    image: file_name
                });
             }
            
        }   
    },// end upload file
    getImage: function(req, res){
        var file = req.params.image;
        var path_file = './upload/articles/'+file;

        fs.exists(path_file, function(exists){
            if(exists){
                return res.sendFile(path.resolve(path_file));
            }else{
                return res.status(404).send({
                    status: 'error',
                    message: 'La imagen no existe !!!'
                });
            }
        });
    },//end getImage
    search: function(req, res){
        // Sacar el string a buscar
        var searchString = req.params.search;

        // Find or
        Article.find({ "$or": [
            { "title": { "$regex": searchString, "$options": "i"}},
            { "content": { "$regex": searchString, "$options": "i"}}
        ]})
        .sort([['date', 'descending']])
        .exec(function(err, articles){

            if(err){
                return res.status(500).send({
                    status: 'error',
                    message: 'Error en la petición !!!'
                });
            }
            
            if(!articles || articles.length <= 0){
                return res.status(404).send({
                    status: 'error',
                    message: 'No hay articulos que coincidan con tu busqueda !!!'
                });
            }

            return res.status(200).send({
                status: 'success',
                articles
            });

        });
    }//end search
};// end controller


// Exportar modulo (fichero actual)
module.exports=controller;


