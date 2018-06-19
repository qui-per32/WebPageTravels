const Controller = require('./controller');
const TravelModel = require('../models/travelModel');
const EmailForNewPass = require("../helpers/mailHelper")

class loginController extends Controller {
    constructor(req, res, next) {
        super(req, res, next)
    }

    login() {
        let username = this.req.body.user;
        let pass = this.req.body.inputPass;
        let travelModel = new TravelModel();
        travelModel.findUser(username, (info) => {
            if (info.length === 0) {
                this.req.flash('info', 'el usuario no existe');
                this.index();
            } else {

                if (pass == info[0].password) {
                    this.res.render('perfil', {
                        layout: 'layout',
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
        let emailDestino = this.req.body.correo;
        let travelModel = new TravelModel();
        travelModel.findEmail(emailDestino, (data) => {

            if (data.length === 0) {
                this.req.flash("data", "El email no existe");
                return
            }else{
                    let emailForNewPass = new EmailForNewPass();
                    emailForNewPass.request(emailDestino);
                    this.res.redirect('/');
                }
        })
    }
}

module.exports = loginController;