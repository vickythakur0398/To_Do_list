//so here we are creating the schema i.e databsae using mongoose
// we have required mongoose on different so after the first rest of that will passed with the instance of that which saves the memory
const mongoose = require(`mongoose`);

//creating schema
const to_Do_Db = new mongoose.Schema({
    data:{
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required:true,

    }

});


//now here what do we want to call the collection in the database where it would be stored

const Todowhole = mongoose.model('Todowhole',to_Do_Db);
// exportin the schema and if we want to use it we have to acquire it in the main index.js 
module.exports = Todowhole;