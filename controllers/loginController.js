const Controller = require('./controller');
const TravelModel = require('../models/travelModel');

class loginController extends Controller {
    constructor(req, res, next) {
        super(req, res, next)
    }

    index() {
        let travelModel = new TravelModel();
        travelModel.fetchAll((data) => {
            console.log(data);
        });

        this.res.render('login', {
            title: 'Login',
            layout: 'layout'
        })
    }
}

module.exports = loginController;