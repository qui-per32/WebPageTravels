const Bcrypt = require('bcrypt');


class secureService {
    encryptPass(pass) {
        return Bcrypt.hashSync(pass, 10);
    }

    comparePass(pass, hash) {
        return Bcrypt.compareSync(pass, hash);
    }
}

module.exports = secureService;