const Controller = require('./controller');


class homeController extends Controller
{
    constructor(req, res ,next)
    {
        super(req, res ,next)
        this.user = req.session.user;
    }
    index()
    {
        this.res.render('index', {
            title: 'WebPageTravels',
            user: this.user
        });
    }
}

module.exports = homeController;