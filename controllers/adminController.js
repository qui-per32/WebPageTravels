const Controller = require('./controller');
const TravelModel = require('../models/travelModel');

class adminController extends Controller {
    constructor(req, res, next) {
        super(req, res, next);
    }

    addTravels() {
        // let travel = this.req.body.travel;
        // let description = this.req.body.description;
        // let price = this.req.body.price;
        const {price,description,travel} = this.req.body;
        const originalname = `/images/${this.req.file.originalname}`;
        
        let travelModel = new TravelModel();
        travelModel.addTravels(travel, description, price, originalname)
            .then((add)=>{
                console.log(JSON.stringify(add));
                
                if (add.travel == travel || add.url == originalname) {
                    this.req.flash('add', 'El viaje o el archivo ya existe');
                } else {
                    console.log("viaje añadido");
                    this.res.redirect('/admin');
                }
            })

    }

    index() {

        let travelModel = new TravelModel();
        travelModel.showTravels()
        .then(((data)=>{
             this.res.render('admin', {
                 title: 'admin',
                 layout: 'layout-single',
                 data: data
             })
        }))

       
        
    }

}

module.exports = adminController;