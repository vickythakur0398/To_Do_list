//installing express 
const express = require(`express`);
const port = 8000;
const app = express();




app.listen(port, function(err){
    if(err){
        console.log(`eeror hit while running the server `, err);
    }

    console.log(`wooh server is running fine`);
})

