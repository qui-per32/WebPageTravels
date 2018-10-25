const Controller = require('./controller');
const TravelModel = require('../models/travelModel');

class editTravelController extends Controller {
    constructor(req, res, next) {
        super(req, res, next);
        this.user = req.session.user;
        this.id= req.params.id;
    }

    editTravel() {

        const {
            price,
            description,
            travel
        } = this.req.body;
        const originalname = `/images/${this.req.file.originalname}`;

        let travelModel = new TravelModel();
        travelModel.editTravelById(this.id, travel, description, price, originalname)
            .then((edit) => {
                this.res.redirect('/admin');
            })
            .catch((err)=>console.error(err));
    }

    index() {
        const id = this.req.params.id;

        let travelModel = new TravelModel();
        travelModel.showTravelbyId(id)
            .then((show)=>{
                this.res.render('editTravel', {
                    title: 'AddTravel',
                    layout: 'layout-single',
                    travelId: show,
                    user: this.user,
                    id: id
                })
            });

        
    }
}

module.exports = editTravelController;