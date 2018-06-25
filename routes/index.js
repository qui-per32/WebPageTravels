var express = require('express');
var router = express.Router();
let HomeController = require('../controllers/homeController');
let RegisterController = require('../controllers/registerController');
let LoginController = require('../controllers/loginController');
let AdminController = require('../controllers/adminController');
const Email = require('../configuration/emailConf');
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

router.post('/mailHelp',(req, res ,next)=>{
    let loginController = new LoginController(req, res, next);
    loginController.newPass();
    console.log("email recuperado ->"+ req.body.email);
})

router.get('/admin', (req, res, next) => {
    let adminController = new AdminController(req, res, next);
    adminController.index();
})

// Router.get('/email', (req, res, next) => {

    
// });


module.exports = router;