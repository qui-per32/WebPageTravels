const Conn = require("../helpers/mysqlconnection");

class travelModel {
    // getAll(cb) {
    //     if (!Conn) return cb("No se ha creado la conexión");
    //     const SQL = "SELECT * FROM usuarios;";
    //     Conn.query(SQL, (error, rows) => {
    //         if (error) return cb(error);
    //         return cb(rows);
    //     });
    // }

    findUser(username) {
        return new Promise((resolve,reject)=>{
            if (!Conn) return reject("No se ha podido crear la conexión");
            const SQL = "SELECT * FROM usuarios WHERE usuario LIKE '%" + username + "%';";
            Conn.query(SQL, (error, rows) => {
                if (error) return reject(error);
                else return resolve(rows);
            })
        })
        
    }

    findEmail(correo) {
        return new Promise((resolve,reject)=>{
            if (!Conn) return reject("No se ha podido crear la conexión");
            const SQL = `SELECT * FROM usuarios WHERE email LIKE '%" + '${correo}' + "%';`;
            Conn.query(SQL, (error, rows) => {
                if (error) return reject(error);
                else return resolve(rows);
            })
        })
        
    }
    getUserByEmailOrUsername(email, username) {
        return new Promise((resolve,reject)=>{
             if (!Conn) return reject("No se ha podido crear la conexión");
             const SQL = `SELECT * FROM usuarios where usuario ='${username}' or email ='${email}';`;
             Conn.query(SQL, (error, rows) => {
                 if (error) return reject(error);
                 else return resolve(rows);
             })
        })
       
    }

    getUserByHash(hash) {
        return new Promise((resolve, reject) => {
            if (!Conn) return reject('No existe conexión');
            let SQL = `SELECT * FROM usuarios WHERE hash = '${hash}';`;
            Conn.query(SQL, (error, rows) => {
                if (error) return reject(error);
                else return resolve(rows);
            })
        })
    };

    setActiveUser(hash) {
        return new Promise((resolve, reject) => {
            if (!Conn) return reject('No existe conexión');
            let SQL = `UPDATE usuarios set active=1 , hash='' where hash='${hash}';`;
            Conn.query(SQL, (error, rows) => {
                if (error) return reject(error);
                else return resolve(rows);
            })
        })
    };

   insertUser(userData) {
       return new Promise((resolve,reject)=>{
           let {user,email,hash,pass} = userData;
       if (!Conn) return reject("No se ha podido crear la conexión");
       const SQL = `INSERT INTO usuarios (usuario, email, password, hash) VALUES ('${user}','${email}','${pass}', '${hash}');`;
       Conn.query(SQL, (error, rows) => {  
           if (typeof Promise === 'function'){
               if (error) return reject(error);
               else return resolve(rows);
           }
       })
       })
       
   }

   setDesactivateUser(user) {
       return new Promise((resolve, reject) => {
           console.log(user.email);
           if (!Conn) return reject("No existe conexión");
           let SQL = `UPDATE usuarios set active=0, hash='${user.hash}', password='' where email='${user.email}';`;
           Conn.query(SQL, (error, rows) => {
               if (error) return reject(error);
               else return resolve(rows);
           })
       })
   }

   setActiveRecover(hash, pass) {
       return new Promise((resolve, reject) => {
           if (!Conn) return reject('No existe conexión');
           let SQL = `UPDATE usuarios set active=1 , password='${pass}', hash='' where hash='${hash}';`;
           Conn.query(SQL, (error, rows) => {
               if (error) return reject(error);
               else return resolve(rows);
           })
       })
   };

   showTravels() {
       return new Promise((resolve,reject)=>{
            if (!Conn) return reject("No se ha podido crear la conexión");
            const SQL = "SELECT * FROM travels;";
            Conn.query(SQL, (error, rows) => {
                if (error) return reject(error);
                else {
                    
                    return resolve(rows);}
            })
       })   
    }
     addTravels(travel,description,price,url) {
         console.log("entro en add");
         
         return new Promise((resolve, reject) => {
             if (!Conn) return reject("No se ha podido crear la conexión");
             const SQL = `INSERT INTO travels (travel, description, price, url) VALUES ('${travel}','${description}','${price}', '${url}');`;
             Conn.query(SQL, (error, rows) => {
                 if (error) return reject(error);
                 else {
                     console.log(rows);
                     
                     return resolve(rows);
                 }
             })
         })
     }
}

module.exports = travelModel;