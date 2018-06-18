const Conn = require("../helpers/mysqlconnection");

class travelDatabase {
    // getAll(cb) {
    //     if (!Conn) return cb("No se ha creado la conexión");
    //     const SQL = "SELECT * FROM usuarios;";
    //     Conn.query(SQL, (error, rows) => {
    //         if (error) return cb(error);
    //         return cb(rows);
    //     });
    // }

    findUser(username, cb) {
        if (!Conn) return cb("No se ha podido crear la conexión");
        const SQL = "SELECT * FROM usuarios WHERE usuario LIKE '%" + username + "%';";
        Conn.query(SQL, (error, rows) => {
            if (error) return cb(error);
            else return cb(rows);
        })
    }

    findEmail(correo, cb) {
        if (!Conn) return cb("No se ha podido crear la conexión");
        const SQL = "SELECT * FROM usuarios WHERE email LIKE '%" + correo + "%';";
        Conn.query(SQL, (error, rows) => {
            if (error) return cb(error);
            else return cb(rows);
        })
    }

   insertUser(nombreUser, emailUser, passwordUser, cb) {
       if (!Conn) return cb("No se ha podido crear la conexión");
       const SQL = `INSERT INTO usuarios (usuario, email, password) VALUES ('${nombreUser}','${emailUser}','${passwordUser}');`;
       Conn.query(SQL, (error, rows) => {
           if (error) return cb(error);
           else return cb(rows);
       })
   }
}

module.exports = travelDatabase;