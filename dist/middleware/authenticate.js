  
  var {User} = require('./../models/user');
  const _ = require ('lodash');

    var authenticate = (req, res, next) => {
     var token = req.header('x-auth');
    
     User.findByToken(token).then((user) => {
              if(!user) {
                return  res.send('No user maatched');
              }  
              req.user = user;
              req.token = token;   
              next();
            },(e) => {
        res.status(401).send(e);
        });
}


module.exports = {authenticate};