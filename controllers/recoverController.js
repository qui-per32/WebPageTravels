const Controller = require('./controller');
const TravelModel = require('../models/travelModel');
const IdentService = require('../service/identService');
const EmailService = require('../service/emailService');
const SecureService = require('../service/secureService');
class recoverController extends Controller {
    constructor(req, res, next) {
        super(req, res, next);
    }

    recover() {
        let email = this.req.body.email;
        let travelModel = new TravelModel();
        let identService = new IdentService();

        travelModel.getUserByEmailOrUsername(email, null)
            .then((data) => {
                console.log(data);


                data[0].hash = identService.getUUIDD(3, 3);
                travelModel.setDesactivateUser(data[0])
                    .then((result) => {
                        let emailService = new EmailService();
                        emailService.sendReactivateEmail(data[0]);
                        this.res.redirect('/login');
                    })
                    .catch(error => {
                        console.log(error)
                    });
            })
            .catch(error => console.error(error));
    }

    formActivate() {
        let travelModel = new TravelModel();
        travelModel.getUserByHash(this.req.params.hash)
            .then((user) => {

                if (user.length === 0) {
                    this.res.render('recover', {
                        title: 'Recuperar pass',
                        layout: 'layout-single',
                        error: 'El link ha caducado'
                    });
                } else {
                    this.res.render('recover', {
                        title: 'Recuperar pass',
                        layout: 'layout-single'
                    });
                }
            })


    };

    activate() {
        let secureService = new SecureService();
        let hash = this.req.params.hash;
        let pass = secureService.encryptPass(this.req.body.renewNewPass);

        let travelModel = new TravelModel();
        travelModel.setActiveRecover(hash, pass)
            .then((user) => {
                    this.res.redirect('/login');
                

            })
            .catch((error) => {
                this.req.flash.error;
            })

    }



    index() {

        if (this.req.flash.error) {
            this.res.render('recover', {
                title: "Recuperar contraseña",
                layout:'layout-single',
                message: this.req.flash.error
            })
        } else {
            this.res.render('recover', {
                title: "Recuperar contraseña.",
                layout: 'layout-single',
                message: null
            })
        }
    };



}

module.exports = recoverController;