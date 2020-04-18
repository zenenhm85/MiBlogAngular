'use strict'

var controller = {
    datosCurso: function(req,res){
        var hola = req.body.hola;
        var hola2 = req.body.hola2;
        
        return res.status(200).send({
                curso:'Node JS',
                hola,
                hola2,
                autor:'Zenen'
            }        
        );
    },
    test:function(req,res){
        return res.status(200).send(
            {
                message:'Soy la funcion test de mi controlador'           
            }        
        );
    }


};// end controller


// Exportar modulo (fichero actual)
module.exports=controller;


