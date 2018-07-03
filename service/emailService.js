const Hbs = require('nodemailer-express-handlebars');
const Path = require('path');
const Email = require('../config/emailConf');


class EmailService {

    sendRegisterEmail(info) {
        Email.transporter.use('compile', Hbs({
            viewEngine: 'hbs',
            extName: '.hbs',
            viewPath: Path.join(__dirname, '../views/email-templates')
        }));
        let message = {
            to: info.email,
            subject: 'Registro',
            template: 'emailAct',
            context: {
                username: info.username,
                hash: info.hash
            }
        }
        Email.transporter.sendMail(message, (error, info) => {
            if (error) {
                return console.log('Error' + error);

            }
            Email.transporter.close();
            return console.log("Email enviado");
        })
    }

        sendReactivateEmail(info) {
            Email.transporter.use('compile', Hbs({
                viewEngine: 'hbs',
                extName: '.hbs',
                viewPath: Path.join(__dirname, '../views/email-templates')
            }));
            let message = {
                to: info.email,
                subject: 'activacion',
                template: 'reactivateUser',
                context: {
                    username: info.username,
                    hash: info.hash
                }
            }
            Email.transporter.sendMail(message, (error, info) => {
                if (error) {
                    return console.log('Error' + error);

                }
                Email.transporter.close();
                return console.log("Email enviado");
            })
        }

}

module.exports = EmailService;