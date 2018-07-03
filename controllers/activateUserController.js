const Controller = require('./controller');
const TravelModel = require('../models/travelModel');

let Activate = function (hash) {
    return new Promise((resolve, reject) => {
        let travelModel = new TravelModel();
        travelModel.getUserByHash(hash)
            .then((User) => {
                travelModel.setActiveUser(hash)
                    .then(() => {
                        resolve(User);
                    })
                    .catch((err) => {
                        console.log('Error en activación usuario' + err);
                        reject('Error en activación usuario' + err);
                    })
            })
            .catch((error) => {
                console.log('Error en la busqueda usuario ' + error);
                reject('Error en la busqueda usuario ' + error);
            });
    });
};

class activateUserController extends Controller {


    constructor(req, res, next) {
        super(req, res, next);
    }

    index() {
        Activate(this.req.params.hash)
            .then((data) => {
                console.log('Mensaje' + JSON.stringify(data));
                if (data.length === 0) {
                    this.res.render('activate', {
                        title: 'Activate',
                        layout: 'layout-single',
                        mensaje: "El hash no existe"
                    });
                } else {
                    this.res.render('activate', {
                        title: 'Activate',
                        layout: 'layout-single'
                    });
                }
            })
            .catch((error) => {
                console.log("Error" + JSON.stringify(error));
                this.res.render('activate', {
                    title: 'Activate',
                    layout: 'layout-single',
                    mensaje: "El hash no existe"
                });

            })
    }




}

module.exports = activateUserController;