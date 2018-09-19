const Controller = require('./controller');
const TravelModel = require('../models/travelModel');

class adminController extends Controller {
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

    activeTravel() {
        const id = this.req.params.id;
        const state = this.req.params.state;

        let travelModel = new TravelModel();
        travelModel.activeTravel(id, state)
            .then((active) => {
                this.res.redirect('/admin');
            })
    }

    removeTravel(){
        const id = this.req.params.id;

        let travelModel = new TravelModel();
        travelModel.removeTravel(id)
        .then((remove)=>{
            this.res.redirect('/admin');
        })
    }

    index() {
        let user = this.user;
        if (user === undefined) {
            this.res.render('permission', {
                title: 'WebPageTravels',
                layout: 'layout-single'
            })
        } else {
            let travelModel = new TravelModel();
            travelModel.showTravels()
                .then(((data) => {
                    this.res.render('admin', {
                        title: 'admin',
                        layout: 'layout-single',
                        data: data,
                        user: user
                    })
                }))
        }
    }
}

module.exports = adminController;