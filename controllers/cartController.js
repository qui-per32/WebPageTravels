const Controller = require('./controller');
const SequelizeModel = require('../models/sequelizeModel');


class CartController extends Controller {
    constructor(req, res, next) {
        super(req, res, next)
        this.user = this.req.session.user;
    }

    Product() {

    }

    index() {
        let productId = parseInt(this.req.params.id);

        SequelizeModel.findAll({
                where: {
                    id: productId
                }
            })
            .then(((product) => {
                console.log(product[0].id);

                // this.req.session.cart = product;
                this.res.render('cart', {
                    title: 'WebPageTravels',
                    layout: 'layout-single',
                    user: this.user,
                    cart: product[0]

                })
            }))

    }
}

module.exports = CartController;