const Controller = require('./controller');
const TravelModel = require('../models/travelModel');
const paginate = require('express-paginate');
const SequelizeModel = require('../models/sequelizeModel');



class homeController extends Controller {
    constructor(req, res, next) {
        super(req, res, next)
        this.user = this.req.session.user;
        this.admin = this.req.session.admin;
    }
    index() {

        let page = (parseInt(this.req.query.page) || 1) - 1;
        let limit = 6;

        let offset = page * limit;
        SequelizeModel.findAndCount({
                offset: offset,
                limit: limit
            })
            .then(((travels) => {
                const currentPage = offset === 0 ? 1 : (offset / limit) + 1;
                const totalCount = travels.count;
                const pageCount = Math.ceil(totalCount / limit);
                const pagination = paginate.getArrayPages(this.req)(10, pageCount, currentPage);


                this.res.render('index', {
                    title: 'WebPageTravels',
                    layout: this.user ? 'layout-single' : 'layout',
                    user: this.user,
                    admin: this.admin,
                    travels: travels.rows,
                    currentPage,
                    links: pagination,
                    hasNext: paginate.hasNextPages(pageCount),
                    pageCount: pageCount
                });
            }))
        //console.log('homeController', admin, user);

        // let page = (parseInt(this.req.query.page) || 1) - 1;
        // let limit = 6;
        // console.log(limit);

        // let offset = page * limit;
        // let travelModel = new TravelModel();
        // travelModel.showTravels()
        //     .then(((travels) => {
                // const currentPage = offset === 0 ? 1 : (offset / limit) + 1;
                // const totalCount = travels[0];
                // console.log(travels);

                // const pageCount = Math.ceil(totalCount / limit);
                // console.log(pageCount);

                // const pagination = paginate.getArrayPages(this.req)(10, pageCount, currentPage);


            //     this.res.render('index', {
            //         title: 'WebPageTravels',
            //         layout: this.user ? 'layout-single' : 'layout',
            //         user: this.user,
            //         admin: this.admin,
            //         travels: travels
            //     });
            // }))


    }
}

module.exports = homeController;