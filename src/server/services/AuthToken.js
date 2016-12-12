var crypto = require('crypto');
var algorithm = 'aes-256-ctr';
var TOKEN_KEY = process.env.TOKEN_KEY;

module.exports = {

    generate: function (oauthToken) {
        var token = {
            token: oauthToken,
            timestamp: new Date().getTime() + ""
        }

        return this.encrypt(JSON.stringify(token));
    },

    parse: function (encryptedToken) {
        return JSON.parse(this.decrypt(encryptedToken));
    },

    encrypt: function (text) {
        var cipher = crypto.createCipher(algorithm, TOKEN_KEY);
        var crypted = cipher.update(text, 'utf8', 'hex');
        crypted += cipher.final('hex');
        return crypted;
    },

    decrypt: function (text) {
        var decipher = crypto.createDecipher(algorithm, TOKEN_KEY);
        var dec = decipher.update(text, 'hex', 'utf-8');
        dec += decipher.final('utf8');
        return dec;
    }
}