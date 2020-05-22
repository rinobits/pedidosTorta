const express = require('express');
const app = express();
const hbs = require('hbs');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
// require('./hbs/helpers');
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';
let urlDB;
 if(process.env.NODE_ENV === 'dev'){
     urlDB="mongodb://localhost:27017/formdata"
 }else{
    urlDB="mongodb+srv://rinobitsadmin:Nothing123@cluster0-xhhpf.mongodb.net/test?retryWrites=true&w=majority"
}
process.env.URLDB = urlDB;
//declare public directory
app.use(express.static(__dirname+'/public'));

//use
app.use(bodyParser.urlencoded({extended:false})); 
app.use(bodyParser.json());

//register partials partials
hbs.registerPartials(__dirname + '/views/partials');
//set view engine 
app.set('view engine', 'hbs');
app.use(require('./routes/peticiones'));
//DB connect
mongoose.connect(process.env.URLDB,
{ useUnifiedTopology: true,  
 useNewUrlParser: true },
(err, res) => { //aunque la bd no exista, serà creada al ingresar datos
    if(err) throw err;
    console.log('Base de datos online');
});
//up server
app.listen(process.env.port, () => {
    console.log(`Escuchando en el puerto ${process.env.port}`);
});
