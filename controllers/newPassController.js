const Controller = require('./controller');
const TravelModel = require('../models/travelModel');

class newPassController extends Controller {
    constructor(req, res, next) {
        super(req, res, next)
    }

    index() {
        this.res.render('newPass', {
            title: 'newPass',
            layout: 'layout-single'
        })
    }

}

module.exports = newPassController;