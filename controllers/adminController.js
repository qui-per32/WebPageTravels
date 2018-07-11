const Controller = require('./controller');
const TravelModel = require('../models/travelModel');

class adminController extends Controller {
    constructor(req, res, next) {
        super(req, res, next)
    }

    getTravels() {

    }

    index() {

        let travelModel = new TravelModel();
        travelModel.showTravels()
        .then(((data)=>{
            console.log(JSON.stringify(data));
             this.res.render('admin', {
                 title: 'admin',
                 layout: 'layout-single',
                 data: data
             })
        }))

       
        
    }

}

module.exports = adminController;