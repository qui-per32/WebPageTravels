const Controller = require('./controller');
const TravelModel = require('../models/travelModel');

class registerController extends Controller {
    constructor(req, res, next) {
        super(req, res, next)
    }

    register() {
        let username = this.req.body.user;
        let email = this.req.body.email;
        let pass = this.req.body.pass;
        let travelModel = new TravelModel();
        travelModel.insertUser(username, email, pass, (info) => {
            if (info.length === 1) {
                this.req.flash('info', 'el usuario ya existe');
                this.index();
            } else {
                this.res.redirect('/login');

            }

        })
    }

 index() {
     this.res.render('register', {
         title: 'Register',
         layout: 'layout'
     })
 }
}

module.exports = registerController;