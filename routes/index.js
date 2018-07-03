var express = require('express');
var router = express.Router();
const HomeController = require('../controllers/homeController');
const RegisterController = require('../controllers/registerController');
const LoginController = require('../controllers/loginController');
const AdminController = require('../controllers/adminController');
const NewPassController = require('../controllers/newPassController');
const ActivateUserController = require('../controllers/activateUserController');
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

router.get('/activate/:hash', (req, res, next) => {
    let activateUserController = new ActivateUserController(req, res, next);
    activateUserController.index();
});


module.exports = router;