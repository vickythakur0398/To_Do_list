//after installing monggose which will act as a layer to connect the mongodb with the 
const mongoose = require(`mongoose`);
//it is all provided in the documentation of mongoose jere to_DO_Db is name of database 
mongoose.connect(`mongodb://localhost/to_Do_Db`);
//this is use for accessong the database ye sab read me h mongoose ke 
//thi is acquiring the connection (to check if it is successfull)
const db = mongoose.connection;
//this is when we hit a error
db.on(`error`, console.error.bind(console, 'error in connecting to database'));
//if connection is succesfull and running
db.once(`open`, function(){
    console.log(`successfully connected to the database!!!!`)

});
//now finally we have to include this file while running up the server in main index.js i.e we have to require this just above the express


