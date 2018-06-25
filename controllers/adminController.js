const Controller = require('./controller');
const TravelModel = require('../models/travelModel');

class adminController extends Controller {
    constructor(req, res, next) {
        super(req, res, next)
    }

     index() {
             this.res.render('admin', {
                 title: 'admin',
                 layout: 'layout-single'
             })
     }
    
}

module.exports = adminController;