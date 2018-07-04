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
        let email = this.req.body.email
        let travelModel = new TravelModel();
        let identService = new IdentService();
        travelModel.getUserByEmailOrUsername(email)
            .then((data) => {
                console.log(JSON.stringify(data));
                
                data[0].hash = identService.getUUIDD(3, 3);
                travelModel.setDesactivateUser(data[0])
                    .then((data) => {
                        let emailService = new EmailService();
                        emailService.sendRecoverEmail(data[0]);
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

                console.log(JSON.stringify(user));
                if (user.length === 0) {
                    this.req.flash.error = "El hash no existe";
                    this.res.redirect('/recover');
                } else {
                    this.res.render('recoverform', {
                        title: 'Recuperar pass'
                    });
                }
            })


    };

    activate() {
        let secureService = new SecureService();
        let hash = this.req.params.hash;
        let pass = secureService.encryptPass(this.req.body.pass);
        let travelModel = new TravelModel();
        travelModel.setActiveRecover(hash, pass)
            .then((user) => {
                this.res.redirect('/login');
            })

            .catch((error) => {
                console.error(error);
            })

    }



    index() {

        if (this.req.flash.error) {
            this.res.render('recover', {
                title: "Recuperar contraseña",
                message: this.req.flash.error
            })
        } else {
            this.res.render('recover', {
                title: "Recuperar contraseña.",
                message: null
            })
        }
    };


}

module.exports = recoverController;