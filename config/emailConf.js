var config = require('./config');
const email = require('nodemailer');

let mailer = {};
mailer.transporter = email.createTransport({
    service: 'Gmail',
    auth: {
        user: config.mailer.auth.user,
        pass: config.mailer.auth.pass
    },
}, {
    from: config.mailer.auth.user,
    headers: {

    }

});

module.exports = mailer;

