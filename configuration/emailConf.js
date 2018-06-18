const email = require('nodemailer');

let mailer = {}; {
    mailer.transporter = email.createTransport({
        service: 'Gmail',
        auth: {
            user: 'qui.per.gonz32@gmail.com',
            pass: 'noraytobi92-Ba66age'
        },
    }), {
        from: 'qui.per.gonz32@gmail.com',
        headers: {

        }
    }
}


module.exports = mailer;