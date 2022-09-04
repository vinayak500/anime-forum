const express = require('express');
const app = express();
const port = 8000;
const expressLayouts = require('express-ejs-layouts');

//set layout.ejs on all the pages using middleware
app.use(expressLayouts);


app.use('/' , require('./routes/index'));


//tell the app we are using ejs as view engine , and search for ejs file in views folder
app.set('view engine' , 'ejs');
app.set('views' , './views');


app.listen(port , function(err){
    if(err){
        console.log(`Error in running the server: ${err}`);
    }

    console.log(`Server is running on port : ${port}`);
}); 