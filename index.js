//..1 installing express then acquiring it 
const express = require(`express`);
//.5.1  
const path = require(`path`);
const port = 8000;
//getting functionality of express in app
const app = express();

//..5 for stting up our templete engine we have used ejs by installing it by npm install ejs so for that we need to tell that ejs will be our view engine
//after this we need to tell where are we going to create it and for this we need to have the path of that directory above 
app.set(`view engine`, `ejs`);
//if we have hardcoded the path than it wil be hard for other user to do that so we have used inbuilt property __dirname and it is folder views
//to render this file we can make changes in the views 
app.set(`views`, path.join(__dirname, 'views'));

//..4 now we will return something other html page just for fun
app.get('/', function(req, res){
    // console.log(req);
    
    res.send('<h1>okk it is this now instead of cannnot get</h1>')
})
//..6 here i am rendering from the views home.ejs and for that we always have to return as we are rendering from views otherwise it will keep finding the other statement and try to execute it so if there is next statement this will make hard
app.get('/vicky', function(req, res){
    // res.send('hii vicky')
    //so we have just provided the name whic we wan to render
    return res.render('home');
})






//...3 shotting app but this wont return anything
app.listen(port, function(err){
    if(err){
        console.log(`eeror hit while running the server `, err);
    }

    console.log(`wooh server is running fine on port`, port);
})

