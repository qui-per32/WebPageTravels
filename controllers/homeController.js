const Controller = require('./controller');
const TravelModel = require('../models/travelModel');
const paginate = require('express-paginate');


class homeController extends Controller {
    constructor(req, res, next) {
        super(req, res, next)
        this.user = req.session.user;
    }
    index() {
        let page = (parseInt(this.req.query.page) || 1) - 1;
        let limit = 6;
        let offset = page * limit;
        let travelModel = new TravelModel();
        travelModel.showTravels({offset: offset,limit: limit})
            .then(((travels) => {

                const currentPage = offset === 0 ? 1 : (offset / limit) + 1;
                const totalCount = travels.count;
                const pageCount = Math.ceil(totalCount / limit);
                const pagination = paginate.getArrayPages(this.req)(10, pageCount, currentPage);
                this.res.render('index', {
                    title: 'WebPageTravels',
                    layout: 'layout',
                    user: this.user,
                    travels: travels,
                    currentPage,
                    links: 
                    pagination,
                        hasNext: paginate.hasNextPages(pageCount),
                        pageCount: pageCount
                });
            }))
        // this.res.render('index', {
        //     title: 'WebPageTravels',
        //     user: this.user
        // });
    }
}

module.exports = homeController;