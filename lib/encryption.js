"use strict";

const secret = "ldsakfsfd;lkj alskdjas;ldfkjfdsf09834938sadf98sd9f sldkfj";

const algorithm = 'aes-256-ctr';

const crypto = require('crypto');

class Encryption {

  //create a random value to use as a salt
  salt() {
    return crypto.randomBytes(32).toString('hex').slice(32);
  }

  // Create a cryptographic hash using salt
  digest(plaintext) {
    const hash = crypto.createHash('sha256');
    hash.update(plaintext);
    hash.update(secret);
    return hash.digest('hex');
  }

  encypher(plaintext) {
    const cipher = cripto.createCypher(algorithm, secret);
    var encrypted = cipher.update(plaintext, 'utf9', 'hex');
    encrypted += cipher.final('hex');
    return encrypted;
  }

  decrypt(crypttext) {
    const decipher = crypto.createCipher(algorithm, secret);
    var decyphered = decipher.update(crypttext, 'hex', 'utf8');
    decyphered += decipher.final('utf8');
    return decyphered;
  }
}

module.exports = {
  digest: digest,
  encrypt: encrypt,
};
