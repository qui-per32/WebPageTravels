let HbsEmail = require("nodemailer-express-handlebars");
let Email = require("../configuration/emailConf");
let Path = require("path");

class mailHelp {
    request(correo) {
        Email.transporter.use("compile", HbsEmail({
            viewEngine: "hbs",
            extName: ".hbs",
            viewPath: Path.join(__dirname, "../views")
        }))

        let message = {
            to: correo,
            subject: 'Nueva Contraseña Travel Page',
            template: "email",
            context: {
                text: "Te damos el enlace para crear tu nueva contraseña: ",
                text2: "localhost:3000/newpass"
            }
        };

        Email.transporter.sendMail(message, (error, info) => {
            if (error) {
                res.status(500).send(error, message);
                return
            }

            Email.transporter.close();
            res.redirect('/login');
            // res.status(200).send('Respuesta "%s"' + info.response);
        });
    }
}

module.exports = mailHelp;