const { readFileSync } = require('fs');
const crypto = require('crypto-js');
const dotenv = require('dotenv');
dotenv.config()

const main = async () => {
  const { ENCRYPTION_KEY_WORD } = process.env;

    if (typeof ENCRYPTION_KEY_WORD === 'undefined') {
        console.error('Missing encryption key');

        process.exit(2);
    }

    const encrypted = readFileSync('./encrypted.txt');
    const decipher = crypto.AES.decrypt(encrypted.toString(), ENCRYPTION_KEY_WORD);
    let decrypted = decipher.toString(crypto.enc.Utf8);

    console.log(decrypted)
}

main();