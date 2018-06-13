const Conn = require("../helpers/mysqlconnection");

class travelDatabase {
    getAll(cb) {
        if (!Conn) return cb("No se ha creado la conexión");
        const SQL = "SELECT * FROM usuarios;";
        Conn.query(SQL, (error, rows) => {
            if (error) return cb(error);
            return cb(rows);
        });
    }

    findUser(username, cb) {
        if (!Conn) return cb("No se ha podido crear la conexión");
        const SQL = "SELECT * FROM usuarios WHERE username LIKE '%" + username + "%';";
        Conn.query(SQL, (error, rows) => {
            if (error) return cb(error);
            else return cb(rows);
        })
    }

    fetchAll(cb) {
        if (!Conn) return cb("No se ha creado la conexión");
        const SQL = "SELECT * FROM usuarios LIMIT 5;";
        Conn.query(SQL, (error, rows) => {
            if (error) return cb(error);
            return cb(rows);
        });
    }

}

module.exports = travelDatabase;