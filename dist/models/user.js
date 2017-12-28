const mongoose = require('mongoose');
const {SHA256} = require('crypto-js');
const bcrypt = require('bcryptjs');
const _ = require('lodash');
const jwt = require('jsonwebtoken');
const validator = require('validator');


var UserSchema = new mongoose.Schema({
    name : {
      type: String,
      minlenght: 1
    },
    login : {
        type: String,
        required: true,
        minlength: 6,
        unique: true
    },
    password : {
        type: String,
        required: true,
        minlength: 6,
        
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

UserSchema.methods.toJSON = function() {
    var user = this;
    var userObject = user.toObject();
    return _.pick(userObject,['_id', 'login']);
};

UserSchema.methods.generateAuthToken = function () {
    var user = this;
    var access = 'auth';
    var token = jwt.sign({_id: user._id.toHexString(), access}, process.env.JWT_SECRET).toString();
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
      }
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
    })
  };


//Hashing password
var password = UserSchema.pre('save', function(next) {
    var user = this;
 
    if(user.isModified('password')) {
        bcrypt.genSalt(10, (err,salt) => {
            bcrypt.hash(user.password, salt, (err, hash) => {
                user.password = hash;
                next();
            });
        });
    }else {
        next();
    };
    if (!user.isModified('password')) return next();
 });


  


var User = mongoose.model('User', UserSchema);
  
module.exports = {User};