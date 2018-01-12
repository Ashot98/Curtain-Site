 const express = require('express');
 const _ = require('lodash');
 const bodyParser = require('body-parser');
 const {ObjectID} = require('mongodb');
 const {mongoose} = require('./db/mongoose');
 const {authenticate} = require('./middleware/authenticate');
 const {Photo} = require('./models/photo');
 const fileUpload = require('express-fileupload');
 const nodemailer = require('nodemailer');
 const {User} = require('./models/user.js');
 const session = require('express-session');
 const MongoStore = require('connect-mongo')(session);
 var {router} = require('./router');
 const port = process.env.PORT || 8080;
 const path = require('path');
  
 var app = express();
 app.use(fileUpload());
 app.use(bodyParser.json());
 app.use(express.static(__dirname));
 app.use(session({
    secret: 'work hard',
    resave: true,
    saveUninitialized: false
  }));



app.post('/api/login', (req, res) => {
    var body = _.pick(req.body, ['login', 'password']);
    User.findByCredentials(body.login, body.password).then((user) => {
        return user.generateAuthToken().then((token) => {
            res.header('x-auth', token).send(user);
        });
    }).catch((e) => {
      res.status(400).send();
    });
 
});
 
// POST QUERY 
app.post('/api/photos/type=:type', function(req, res) {
  if (!req.files)
    return res.status(400).send('No photos were uploaded');
 
  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
  let files = req.files.sampleFile;
  let type = req.body.selType;
  files.forEach((file) => {
    let name = file.name;
    let path = `D:/Ashot/Programming/Web/WorkProjects/Curtains Site/dist/img/${type}/${name}`;
     
  //  Use the mv() method to place the file somewhere on your server
    file.mv(path, function(err) {
    if (err)
      return res.status(500).send(err);
    }); 
    const photo = new Photo({
        path: 'img/'+ type + '/' + name,
        type: type
    });
      photo.save((e) => {
          if(e)
              console.log(e);
      });
  })
  res.send("Files uploaded")
});
  
//Find all photos
app.get('/api/photos', (req, res) => {
    Photo.find().then((photos) => {
        if(photos.length === 0){
            return res.send('No photos');
        }
        res.send({photos});
    }).catch((e) => res.status(400).send(e)); 
});
//Find one
app.get('/api/photos/type=:type',(req, res) => {
     var type = req.params.type;
   
    Photo.find({type:type}).then((photo) => {
        if(!photo){
            return res.send('No photo');
        }
        res.send(photo);
    }).catch((e) => res.send(e));
});
//Find by ID
app.get('/api/photos/:id', (req, res) => {
     var id = req.params.id;
     
      if(!ObjectID.isValid(id)){
     return res.status(404).send('Invalid ID');  
   }
     
    Photo.findById(id).then((photo) => {
         if(!photo){
             return res.send('ID not found');
         }
         res.send({photo});
    }).catch((e) => {
         res.status(400).send();
     });
});

//DELETE by type
app.delete('/api/photos/type=:type', (req, res) => {
     var type = req.params.type;
     Photo.findOneAndRemove({type:type}).then((photo) => {
         if(!photo){
            return res.status(400).send('No photo has been found by that type');
         }
         res.send(photo);
     }).catch((e) => {res.send(e)});
     
 });

 //DELETE by ID
app.delete('/api/photos/:id', (req, res) => {
     var id = req.params.id
     if(!ObjectID.isValid(id)){
         res.status(400).send('Invalid ID');
     }
     Photo.findByIdAndRemove(id).then((photo) => {
         if(!photo){
            return res.status(400).send('No photo has been found by that ID');
         }
         res.send(photo);
     }).catch((e) => {res.send(e)});
     
 });

app.post('/api/designer', (req, res) => {
    var transporter = nodemailer.createTransport({
        service: 'Mail.ru',
        auth: {
          user: 'mikael_2000@mail.ru',
          pass: 'skylinegtr34'
        }
    });
    
    var text = `E-Mail: ${req.body.email}
Имя: ${req.body.fullname}
Телефон: ${req.body.tel}
Доп. Информация: ${req.body.add_info}`;

    var mailOptions = {
        from: 'mikael_2000@mail.ru',
        to: 'ashott98@gmail.com',
        subject: 'Sending "Designer" form',
        text: text
     };
      
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
          res.status(400).send(error)
        } else {
          console.log('Email sent: ' + info.response);
          res.status(200).send();
        }
    });
    
});

app.get('*', function (request, response){
    response.sendFile(path.resolve(__dirname, 'index.html'))
});
 


app.listen(port, () =>{
     console.log('Started on port' + port);
});
 


 