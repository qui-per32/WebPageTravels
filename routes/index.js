var express = require('express');
var router = express.Router();
let HomeController = require('../controllers/homeController');
let RegisterController = require('../controllers/registerController');
let LoginController = require('../controllers/loginController');
let AdminController = require('../controllers/adminController');
let NewPassController = require('../controllers/newPassController');
const SessionController = require('../controllers/sessionController');
const IdentificationService = require('../service/identService');
const SecureService = require('../service/secureService');
const Email = require('../config/emailConf');
const Path = require('path');
const hbsEmail = require('nodemailer-express-handlebars');

/* GET home page. */
router.get('/', function (req, res, next) {
    let homeController = new HomeController(req, res, next);
    homeController.index();
});

router.get('/register', (req, res, next) => {
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

router.post('/login', (req, res, next) => {
    let loginController = new LoginController(req, res, next);
    loginController.login();
})

router.post('/renew',(req, res ,next)=>{
    let loginController = new LoginController(req, res, next);
    loginController.newPass();
})

router.get('/admin', (req, res, next) => {
    let adminController = new AdminController(req, res, next);
    adminController.index();
})

router.get('/newPass', (req, res, next) => {
    let newPassController = new NewPassController(req, res, next);
    newPassController.index();
})

router.post('/newPass', (req, res, next) => {
    let newPassController = new NewPassController(req, res, next);
    newPassController.index();
})

router.get('/closeSession', (req, res, next) => {
    let sessionsController = new SessionController(req, res, next);
    sessionsController.closeSession();
    res.redirect('/');
});

// Router.get('/hash/:hash', (req, res, next) => {
//     console.log('entrado en regeneration ->' + req.params.hash);

//     res.send(200);

// });

// Router.get('/email', (req, res, next) => {

    
// });


module.exports = router;