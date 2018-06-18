var express = require('express');
var router = express.Router();
let HomeController = require('../controllers/homeController');
let RegisterController = require('../controllers/registerController');
let LoginController = require('../controllers/loginController');
const Email = require('../configuration/emailConf');
const Path = require('path');
const hbsEmail = require('nodemailer-express-handlebars');

/* GET home page. */
router.get('/', function(req, res, next) {
   let homeController = new HomeController(req, res, next);
   homeController.index();
});

router.get('/register', (req,res,next)=>{
   let registerController = new RegisterController(req, res, next);
   registerController.index();
})

router.post('/register', (req, res, next) => {
    let registerController = new RegisterController(req, res, next);
    registerController.register();
})

router.get('/login', (req, res, next) => {
   let loginController = new LoginController(req, res, next);
   loginController.index();
})

router.post('/login',(req,res,next)=>{
    let loginController = new LoginController(req,res,next);
    loginController.login();
})

// Router.get('/email', (req, res, next) => {

//     Email.transporter.use('compile', hbsEmail({
//         viewEngine: 'hbs',
//         extName: '.hbs',
//         viewPath: Path.join(__dirname, '../views/emails')
//     }));

//     let message = {
//         to: 'perezgonz32@gmail.com',
//         subject: 'Email Recuperacion',
//         template: 'email',
//         context: {
//             text: 'enviamos una prueba por handblears'
//         },
//         attachments: [{
//                 filname: 'sdai_snow.jpg',
//                 path: __dirname + '/../public/images/sdai_snow.jpg',
//                 cid: 'image'
//             }

//         ]
//     };
//     Email.transporter.sendMail(message, (error, info) => {
//         if (error) {
//             res.status(500).send(error, message);
//             return
//         }
//         Email.transporter.close();
//         res.status(200).send('Respuesta "%s"' + info.response);
//     });
// });


module.exports = router;
