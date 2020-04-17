'use strict'

'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = 3900;

const options= {
    useNewUrlParser: true,
    useUnifiedTopology:true,
    useCreateIndex:true,
    useFindAndModify:false,
    autoIndex:false,
    poolSize:10,
    serverSelectionTimeoutMS: 5000,
    socketTimeoutMS:45000,
    family:4

};

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/api_rest_blog', options)
        .then(() => {
            console.log('Conexión a la base de datos correcta !!!');

            // Crear servidor y ponerme a escuchar peticiones HTTP
            app.listen(port, () => {
                console.log('Servidor corriendo en http://localhost:'+port);
            });

});

