const Controller = require('./controller');
const TravelModel = require('../models/travelModel');

class addTravelController extends Controller {
    
    constructor(req, res, next) {
        super(req, res, next);
        this.user = req.session.user;
        
    }

    addTravels() {
        const {
            price,
            description,
            travel
        } = this.req.body;
        const originalname = `/images/${this.req.file.originalname}`;

        let travelModel = new TravelModel();
        travelModel.addTravels(travel, description, price, originalname)
            .then((add) => {
                this.res.redirect('/admin');
            })
    }

    index() {
        this.res.render('addTravel', {
            title: 'AddTravel',
            layout: 'layout-single',
            user: this.user
        })
    }
}

module.exports = addTravelController;