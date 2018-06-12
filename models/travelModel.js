const Conn = require("../helpers/mysqlconnection");

class travelDatabase {
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