var express = require('express');
var router = express.Router();
let HomeController = require('../controllers/homeController');
let RegisterController = require('../controllers/registerController');
let LoginController = require('../controllers/loginController');

/* GET home page. */
router.get('/', function(req, res, next) {
   let homeController = new HomeController(req, res, next);
   homeController.index();
});

router.get('/register', (req,res,next)=>{
   let registerController = new RegisterController(req, res, next);
   registerController.index();
})

router.get('/login', (req, res, next) => {
   let loginController = new LoginController(req, res, next);
   loginController.index();
})

router.post('/login',(req,res,next)=>{
    let loginController = new LoginController(req,res,next);
    loginController.login();
})

module.exports = router;
