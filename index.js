const express = require('express');
const app = express();
const port = 8000;
const expressLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose');
//used for session cookies
const session = require('express-session');
const passport = require('passport');
const passportLocal = require('./config/passport-local-strategy');

const cookieParser = require('cookie-parser');

app.use(express.urlencoded());

app.use(cookieParser());

//search for all the css , js file in assets folder
app.use(express.static('./assets'));


app.set('layout extractStyles' , true);
app.set('layout extractScripts' , true);

//set layout.ejs on all the pages using middleware
app.use(expressLayouts);




//tell the app we are using ejs as view engine , and search for ejs file in views folder
app.set('view engine' , 'ejs');
app.set('views' , './views');



app.use(session({
    name:'codeial',
    //TODO change the secret before deployment in production mode
    secret: 'blahsomething',
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: (1000 * 60 * 100)
    }
}));

app.use(passport.initialize());
app.use(passport.session());

app.use('/' , require('./routes/index'));

app.listen(port , function(err){
    if(err){
        console.log(`Error in running the server: ${err}`);
    }

    console.log(`Server is running on port : ${port}`);
}); 