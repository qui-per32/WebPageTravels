var express = require('express');
var router = express.Router();
const HomeController = require('../controllers/homeController');
const RegisterController = require('../controllers/registerController');
const LoginController = require('../controllers/loginController');
const AdminController = require('../controllers/adminController');
const AddTravelController = require('../controllers/addTravelcontroller');
const EditTravelController = require('../controllers/editTravelcontroller');
const NewPassController = require('../controllers/newPassController');
const ActivateUserController = require('../controllers/activateUserController');
const SessionController = require('../controllers/sessionController');
const RecoverController = require('../controllers/recoverController');
const CartController = require('../controllers/cartController');
const UploadService = require('../service/uploadService');
let uploadService = new UploadService();
let upload = uploadService.up();
const Email = require('../config/emailConf');
const Path = require('path');
const hbsEmail = require('nodemailer-express-handlebars');

/* GET home page. */
router.get('/', function (req, res, next) {
    let homeController = new HomeController(req, res, next);
    homeController.index();
});

router.get('/addTravel/:id', function (req, res, next) {
    let cartController = new CartController(req, res, next);
    cartController.index();
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

router.get('/recover', (req, res, next) => {
    let recoverController = new RecoverController(req, res, next);
    recoverController.index();
});

router.post('/recover', (req, res, next) => {
    let recoverController = new RecoverController(req, res, next);
    recoverController.recover();
});

router.get('/recover/pass/:hash', (req, res, next) => {
    let recoverController = new RecoverController(req, res, next);
    recoverController.formActivate();
});

router.post('/recover/pass/:hash', (req, res, next) => {
    let recoverController = new RecoverController(req, res, next);
    recoverController.activate();
});

router.get('/add/travel', (req, res, next) => {
    let addTravelController = new AddTravelController(req,res,next);
    addTravelController.index();
})

router.post('/add', upload.single('file'),(req,res,next)=>{
    let adminController = new AdminController(req,res,next);
    adminController.addTravels();
})

router.get('/active/:id/:state', (req, res, next) => {
    let adminController = new AdminController(req, res, next);
    adminController.activeTravel();
})

router.get('/removeTravel/:id', (req, res, next) => {
    let adminController = new AdminController(req, res, next);
    adminController.removeTravel();
})

router.get('/editTravel/:id', (req, res, next) => {
    let editTravelController = new EditTravelController(req, res, next);
    editTravelController.index();
})

router.post('/editTravel/:id', upload.single('file'), (req, res, next) => {
    let editTravelController = new EditTravelController(req, res, next);
    editTravelController.editTravel();
})


module.exports = router;