const { readFileSync } = require('fs');
const crypto = require('crypto-js');
const dotenv = require('dotenv');
dotenv.config()

const main = async () => {
  const { NODE_ENV, ENCRYPTION_KEY_WORD, ENCRYPTION_KEY_WORD_LOCAL } = process.env;
  
  const encryptionKeyWords = NODE_ENV === 'production'
    ? ENCRYPTION_KEY_WORD
    : ENCRYPTION_KEY_WORD_LOCAL;

    if (typeof encryptionKeyWords === 'undefined') {
        console.error('Missing encryption key');

        process.exit(2);
    }

    const encrypted = readFileSync('./encrypted.txt');
    const decipher = crypto.AES.decrypt(encrypted.toString(), encryptionKeyWords);
    let decrypted = decipher.toString(crypto.enc.Utf8);

    console.log(decrypted)
}

main();