var config = require('../bin/config');

const email = require('nodemailer');

let mailer = {}; {
    mailer.transporter = email.createTransport({
        service: 'Gmail',
        auth: {
            user: config.mailer.auth.user,
            pass: config.mailer.auth.pass
        },
    }), {
        from: 'qui.per.gonz32@gmail.com',
        headers: {

        }
    }
}


module.exports = mailer;