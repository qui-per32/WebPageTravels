const Conn = require("../helpers/mysqlconnection");

class travelModel {

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
            const SQL = `SELECT * FROM travels;`;
            Conn.query(SQL, (error, rows) => {
                if (error) return reject(error);
                else {
                    
                    return resolve(rows);}
            })
       })   
    }
     addTravels(travel,description,price,url) {
         
         return new Promise((resolve, reject) => {
             if (!Conn) return reject("No se ha podido crear la conexión");
             const SQL = `INSERT INTO travels (travel, description, price, url) VALUES ('${travel}','${description}','${price}', '${url}');`;
             Conn.query(SQL, (error, rows) => {
                 if (error) return reject(error);
                 else {
                     return resolve(rows);
                 }
             })
         })
     };

     activeTravel(id, state) {
         return new Promise((resolve, reject) => {
             if (!Conn) return reject("No existe conexión");
             let SQL = `UPDATE travels set active='${state === "0" ? 1 : 0}' where id='${id}';`;
             Conn.query(SQL, (error, rows) => {
                 if (error) return reject(error);
                 else return resolve(rows);
             })
         })
     }

     removeTravel(id) {
         return new Promise((resolve, reject) => {
             if (!Conn) return reject("No existe conexión");
             let SQL = `DELETE FROM travelDatabase.travels WHERE id='${id}';`;
             Conn.query(SQL, (error, rows) => {
                 if (error) return reject(error);
                 else return resolve(rows);
             })
         })
     }

     showTravelbyId(id) {
         return new Promise((resolve, reject) => {
             if (!Conn) return reject("No existe conexión");
             let SQL = `SELECT * FROM travels WHERE id='${id}';`;
             Conn.query(SQL, (error, rows) => {
                 if (error) return reject(error);
                 else return resolve(rows);
             })
         })
     }

     editTravelById(id, travel, price, description, originalname) {
         return new Promise((resolve, reject) => {
             if (!Conn) return reject("No existe conexión");
             let SQL = `UPDATE travels set travel='${travel}', description='${description}', price='${price}', url='${originalname}' where id='${id}';`;
             Conn.query(SQL, (error, rows) => {
                 if (error) return reject(error);
                 else return resolve(rows);
             })
         })
     }

}

module.exports = travelModel;