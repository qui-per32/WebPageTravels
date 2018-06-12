const Controller = require('./controller');
const TravelModel = require ('../models/travelModel');

class registerController extends Controller
{
    constructor(req, res, next)
    {
        super(req, res ,next)
    }

    index()
    {
       let travelModel = new TravelModel();
       travelModel.fetchAll((data)=>{
        console.log(data);
       });

        this.res.render('register', {
            title: 'Register',
            layout: 'layout'
        })
    }
}

module.exports=registerController;