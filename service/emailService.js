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
                user: info.usuario,
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

        sendReactivateEmail(data) {
            Email.transporter.use('compile', Hbs({
                viewEngine: 'hbs',
                extName: '.hbs',
                viewPath: Path.join(__dirname, '../views/email-templates')
            }));
            let message = {
                to: data.email,
                subject: 'activacion',
                template: 'reactivateUser',
                context: {
                    user: data.usuario,
                    hash: data.hash
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