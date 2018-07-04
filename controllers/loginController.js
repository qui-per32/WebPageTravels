const Controller = require('./controller');
const TravelModel = require('../models/travelModel');
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
        travelModel.findUser(username)
            .then((info) => {
                if (info.length === 0) {
                    this.req.flash('info', 'el usuario no existe');
                    this.index();
                } else {

                    if (secureService.comparePass(pass, info[0].password)) {
                        this.req.session.user = username;
                        this.res.render('index', {
                            title: 'WebPageTravels',
                            layout: 'layout-single',
                            user: username
                        });
                        

                    } else {
                        this.req.flash('info', 'La contraseña es incorrecta');
                        this.index();
                    }
                }

            });
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
}

module.exports = loginController;