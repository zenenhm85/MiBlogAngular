'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ArticleSchema = ({
    title:String,
    content:String,
    date:{type:Date,default:Date.now},
    image:String
});






// Exportar modulo (fichero actual)
module.exports = mongoose.model('Article',ArticleSchema);
