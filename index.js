//..1 installing express then acquiring it 
const express = require(`express`);
//.5.1  
const path = require(`path`);
const port = 8000;
//....9 so here we are acquiring the mongoose 
const db = require(`./config/mongoose`);
//...10 after creating the schema accessing it
// this Todowhole will be used now for the data base
const Todowhole = require(`./models/Tododata`);

//getting functionality of express in app
const app = express();

//..5 for stting up our templete engine we have used ejs by installing it by npm install ejs so for that we need to tell that ejs will be our view engine
//after this we need to tell where are we going to create it and for this we need to have the path of that directory above 
app.set(`view engine`, `ejs`);
//if we have hardcoded the path than it wil be hard for other user to do that so we have used inbuilt property __dirname and it is folder views
//to render this file we can make changes in the views 
app.set(`views`, path.join(__dirname, 'views'));

//..7.1 here we are using our middleware parsar i.e it will help us to get data from the form in and send ity to req as objects and we know data is encoded thats why we use parsar it is a kind of middle ware
//app.use signifies it is midlleware noww after that we can access it in aoo.post 7.1
app.use(express.urlencoded());
//here we are using another middle ware which will help us to acess all files in that folder and this is css and js files use to beautify the pages and assets is folder name in which it is stored
app.use(express.static(`assets`))

//..4 now we will return something other html page just for fun app.get is controller 
app.get('/', function(req, res){
    // console.log(req);
    
    // res.send('<h1>okk it is this now instead of cannnot get</h1>')
    //setting up title from here and then update that in home
    //fetching from the database
    Todowhole.find({},function(err, details){
        if(err){
            console.log(`error in fetching the contacts from database`)
            return;
        }
        return res.render('home',
            {title: "To DO List",
             all: details
            });

    });
    
});
//..6 here i am rendering from the views home.ejs and for that we always have to return as we are rendering from views otherwise it will keep finding the other statement and try to execute it so if there is next statement this will make hard
app.get('/vicky', function(req, res){
    // res.send('hii vicky')
    //so we have just provided the name whic we wan to render
    return res.render('hii');
})

//..7.1 and alll part is actually done after getting psrser
app.post('/create-to-do', function(req, res){
    // return res.redirect('/')
    // console.log(req.body);
    // console.log(req.body.dates);
    // console.log(req.body.category);
    // return;
     //to do later push it in database
     /*nameofdatabse.push{
         description:req.body.description
         etc 
         or nameodbase.push(req.body)
     } */
    //  return res.redirect(`back`)

    //now we are pushing our data into the database
    // console.log(req.body)
    Todowhole.create({
        
        data: req.body.data,
        category: req.body.category,
        date: req.body.dates,
        //whenever we create something we havbe to give a function that if the thing which we have created is not provided by the user or database then show error  otherwise access that we are creating a call back function
    },function(err, newTo){
        if(err){
            console.log("error in creating the ToDO!!!!"); 
            return;
        }
        console.log(`******`, newTo);
        // so if todo is made than just back 
        return res.redirect(`back`);
    });

    // return res.redirect(`back`)
});


//..8 deleting the thing and app.get('/address) is router and function is a controller  
//here it is a string param description i.e in textarea is going to be come over here
app.post(`/delete-todo`,function(req, res){

    //to rectify later
    let id= req.query._id;
    Todowhole.findByIdAndDelete(id, function(err){
    if(err){
        console.log(`error in deleting from the database`);
        return;
    
    }
    return res.redirect(`back`);

    })

});


// kya problem h jab isme data dal rha hu to error aa rha leave the mouse h





//...3 shotting app but this wont return anything
app.listen(port, function(err){
    if(err){
        console.log(`eeror hit while running the server `, err);
    }

    console.log(`wooh server is running fine on port`, port);
})

