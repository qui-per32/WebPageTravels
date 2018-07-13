const Controller = require('./controller');
const TravelModel = require('../models/travelModel');


class homeController extends Controller
{
    constructor(req, res ,next)
    {
        super(req, res ,next)
        this.user = req.session.user;
    }
    index()
    {
           let travelModel = new TravelModel();
           travelModel.showTravels()
               .then(((travels) => {
                   this.res.render('index', {
                       title: 'WebPageTravels',
                       layout: 'layout',
                       user: this.user,
                       travels: travels
                   })
               }))
        // this.res.render('index', {
        //     title: 'WebPageTravels',
        //     user: this.user
        // });
    }
}

module.exports = homeController;