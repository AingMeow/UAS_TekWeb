let mysql = require('mysql');
 
let connection = mysql.createConnection({
   host:        'localhost:3000',
   user:        'root',
   password:    '',
   database:    'db_uas_ihsan'
 });

connection.connect(function(error){
   if(!!error){
     console.log(error);
   }else{
     console.log('Koneksi Berhasil!');
   }
 })

module.exports = connection;