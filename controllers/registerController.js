const Controller = require('./controller');
const TravelModel = require('../models/travelModel');
const IdentService = require('../service/identService');
const EmailService = require('../service/emailService');
const RegisterService = require('../service/secureService');


class registerController extends Controller {
    constructor(req, res, next) {
        super(req, res, next)
    }

    register() {
        let username = this.req.body.user;
        let email = this.req.body.email;
        let pass = this.req.body.pass;
        let registerData = {...this.req.body}
        let travelModel = new TravelModel();
        travelModel.findUser(username, (info) => {
            
            if (typeof (info[0]) !== 'undefined') {
                if (info[0].usuario === username && info[0].email === email) {
                    this.req.flash('info', 'El usuario o email esta utilizado');
                    this.res.redirect('/register');
                    return;
                } 
            } else {
                let identService = new IdentService();;
                registerData.hash = identService.getUUIDD(3, 4);
                let registerService = new RegisterService();
                registerData.pass = registerService.encryptPass(registerData.pass);
                let emailService = new EmailService();
                emailService.sendRegisterEmail(registerData);
                travelModel.insertUser(registerData, console.log );
                this.res.redirect('/');
            }

        });

    }

    index() {
        let info = this.req.flash('info');

        if (info == "") {
            this.res.render('register', {
                title: 'Register',
                layout: 'layout-single'
            });
        } else {
            this.res.render('register', {
                title: 'Register',
                layout: 'layout-single',
                info: info
            });
            info = "";
        }
    }
}

module.exports = registerController;