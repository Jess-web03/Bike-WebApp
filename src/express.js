const express = require('express');
const cors = require("cors");
const app = express();
//install nodemailer
//const nodemailer = require("nodemailer");
app.use(express.urlencoded({extended:false}));
const bodyParser = require('body-parser');

app.use('/', express.static(__dirname+"/wwwroot"));
app.use(cors());
app.use(bodyParser.json());

// var transport = nodemailer.createTransport({
//     host: "smtp.mailtrap.io",
//     port: 2525,
//     auth: {
//       user: "970d90102e029a",
//       pass: "9a18e11ac26afe"
//     }
//   });

app.post('/contact', function (req, res){
  
    const obj = JSON.parse(JSON.stringify(req.body));
    res.send(`Message Envoyé ${obj['name']}
              `);
    console.log(req); 
  
  })


// app.post('/contact', function (req, res){
//     const receiveEmail = (name ,email, message) =>{
//         const mailOption ={
//             from: email,
//             to: 'j.meerts@interface3.be',
//             name,
//             message
//         }
//         transport.sendMail(mailOption, function (error, data) {
//             if(error){
//                 console.log('error')
//             }else{
//                 console.log('sent')
//             }
//         })
//     }
  
//   })


 const port = process.env.PORT || 3003;
app.listen(port, function () { 
  console.log(`Listening on port ${port}`)
}); 




