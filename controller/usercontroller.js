
const User = require('../models/user');


module.exports.profile = function(req , res){
    return res.render('user' ,{
        title:'Anime Forum!'
    });
}; 


module.exports.signup = function(req , res){
    return res.render('user_sign_up' ,{
        title:'Anime Forum!'
    });
}; 

module.exports.signin = function(req , res){
    return res.render('user_sign_in' ,{
        title:'Anime Forum!'
    });
}; 


module.exports.profile = function(req , res){
    if(req.cookies.user_id)
    {
        User.findById(req.cookies.user_id , function(err, user){
          if(user)
          {
            console.log(user);
            return res.render('user_profile' ,{
              title: "Anime Forum!",
              user: user
            })
          }else{
            return res.redirect('/users/sign-in');
          }

          // return res.redirect('/users/sign-in');
        });
    }
    else{
      return res.redirect('/users/sign-in');
    }
}; 


module.exports.create = function(req , res){
    if(req.body.password != req.body.confirm_password)
    {
     return res.redirect('back');
    }

  User.findOne({email:req.body.email} , function(err , user) {
        if(err){console.log('error in finding user in signing up'); return;
       }

       if(!user)
       {
        User.create(req.body , function(err , user){
             if(err){console.log('error in creating user while signing up'); return;}

             return res.redirect('/user/sign-in');

            });
       }else{
        return res.redirect('back');
       }


  })
}; 

module.exports.createsession = function(req , res){
//      //steps to authenticate
//      //find the user 
//      User.findOne({email:req.body.email} , function(err,user){

//         if(err){console.log('error in finding user in signing up'); return;}

//      //handle user found
//              if(user)
//              {
//  //handle password which dont match
//               if(user.password != req.body.password)
//               {
//                 return res.redirect('back');
//               }
//                //handle session creation
//                     res.cookie('user_id',user._id);
//                     return res.redirect('/user/profile');

//              }else
//              {
//                //handle user not found
//               return res.redirect('back');
//              }


//       })



return res.redirect('/');


}; 