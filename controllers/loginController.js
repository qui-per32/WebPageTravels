const Controller = require('./controller');
const TravelModel = require('../models/travelModel');

class loginController extends Controller {
    constructor(req, res, next) {
        super(req, res, next)
    }

    // index() {
    //     let travelModel = new TravelModel();
    //     travelModel.fetchAll((data) => {
    //         console.log(data);
    //     });

    //     this.res.render('login', {
    //         title: 'Login',
    //         layout: 'layout'
    //     })
    // }

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
                    this.index();

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
                layout: 'layout'
            });
        } else {
            this.res.render('login', {
                title: 'Login',
                layout: 'layout',
                info: info
            });
            info = "";
        }
    }
}

module.exports = loginController;