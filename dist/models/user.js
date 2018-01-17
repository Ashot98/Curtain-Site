const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const _ = require ('lodash');
const bcrypt = require('bcrypt');

var UserSchema = new mongoose.Schema({
    login: {
       type: String,
       required:true,
       minlenght: 6,
       unique:true   
   
 },
    password: {
        type: String,
        required:true,
        minlenght: 6
    },
    tokens: [{
        access: {
          type: String,
          required: true
        },
        token: {
            type: String,
            required: true
            
        }
    }]
    
}); 
UserSchema.statics.auth = function (login, password, callback) {
    User.findOne({login: login})
      .exec(function (err, user) {
        if (err) {
          return callback(err)
        } else if (!user) {
          var err = new Error('User not found.');
          err.status = 401;
          return callback(err);
        }
        bcrypt.compare(password, user.password, function (err, result) {
          if (result === true) {
            return callback(null, user);
          } else {
            return callback();
          }
        })
      });
  };

UserSchema.methods.toJSON = function() {
    var user = this;
    var userObject = user.toObject();
    return _.pick(userObject,['_id', 'login']);
};

UserSchema.methods.generateAuthToken = function () {
    var user = this;
    var access = 'auth';
    var token = jwt.sign({_id: user._id.toHexString(), access,exp: Math.floor(Date.now() / 1000) + (60 * 60)*24}, 'work hard').toString();
    user.tokens.push({access, token});

    return user.save().then(() => {
      return token;
    });
};

UserSchema.methods.removeToken = function (token) {
    var user = this;
  
    return user.update({
      $pull: {
        tokens: {token}
      },
    });
  };

UserSchema.statics.findByToken = function (token) {
 var User = this;
 var decoded;

  try {
   decoded = jwt.verify(token, process.env.JWT_SECRET);
  } catch(e) {
   return Promise.reject();
  }
  return User.findOne({
    '_id': decoded._id,
    'tokens.token': token,
    'tokens.access': 'auth'
  });
};

UserSchema.statics.findByCredentials = function(login, password) {
  var User = this;
  return User.findOne({login}).then((user) => {
    if(!user) {
          return Promise.reject();
    }
    return new Promise((resolve, reject) => {
        bcrypt.compare(password, user.password, (err, res) => {
         if(res){
             resolve(user);
         } else {
             reject();
         }
        });
    });
  });
};

//Hashing password
UserSchema.pre('save', function(next) {
   var user = this;

   if(user.isModified('password')) {
       bcrypt.genSalt(10, (err,salt) => {
           bcrypt.hash(user.password, salt, (err, hash) => {
               user.password = hash;
               next();
           });
       });
   } else{
       next();
   };
});




var User = mongoose.model('User', UserSchema );

module.exports = {User};


  


var User = mongoose.model('User', UserSchema);
  
module.exports = {User};