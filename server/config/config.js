//==================
//  Puerto
//==================
process.env.PORT = process.env.PORT || 3000;
//==================
//  Entorno
//==================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//==================
//  Base de datos
//==================
let urlDB;
if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/eyedata';
} else {
    urlDB = 'mongodb+srv://angiegc:Catica2013@gazeacceder.8z7yv.mongodb.net/eyedata?retryWrites=true&w=majority';
}
process.env.URLDB = urlDB;