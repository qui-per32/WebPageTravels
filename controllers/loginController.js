const Controller = require('./controller');
const TravelModel = require('../models/travelModel');
const EmailForNewPass = require("../service/emailService")
const SecureService = require("../service/secureService");


class loginController extends Controller {
    constructor(req, res, next) {
        super(req, res, next)
    }

    login() {
        let username = this.req.body.user;
        let pass = this.req.body.inputPass;
        let travelModel = new TravelModel();
        let secureService = new SecureService();
        travelModel.findUser(username, (info) => {
            if (info.length === 0) {
                this.req.flash('info', 'el usuario no existe');
                this.index();
            } else {

                if (secureService.comparePass(pass, info[0].password)) {
                    this.res.render('index', {
                        layout: 'layout-single',
                        user: username
                    });

                } else {
                    this.req.flash('info', 'La contraseña es incorrecta');
                    this.index();
                }
            }

        })
    }

    index() {
        let info = this.req.flash('info');

        if (info == "") {
            this.res.render('login', {
                title: 'Login',
                layout: 'layout-single'
            });
        } else {
            this.res.render('login', {
                title: 'Login',
                layout: 'layout-single',
                info: info
            });
            info = "";
        }
    }

    newPass()  {
        let emailDestino = this.req.body.email;
        let travelModel = new TravelModel();
        travelModel.findEmail(emailDestino, (info) => {

            if (info.length === 0) {
                this.req.flash('info', 'El email no existe');
                this.index();
            }else{
                    let emailForNewPass = new EmailForNewPass();
                    emailForNewPass.sendReactivateEmail(this.req.body);
                    this.res.redirect('/');
                }
        })
    }
}

module.exports = loginController;