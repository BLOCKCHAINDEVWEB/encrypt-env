const fs = require('fs');
const crypto = require('crypto-js');
const dotenv = require('dotenv');
dotenv.config()

const { ENCRYPTION_KEY_WORD } = process.env;

const encryptedFile = 'encrypted.json';

let rawdata = fs.readFileSync(encryptedFile);
let globalEnvJSON = JSON.parse(rawdata);

const encryptDatas = crypto.AES.encrypt(JSON.stringify(globalEnvJSON), ENCRYPTION_KEY_WORD).toString();

fs.writeFile('encrypted.txt', encryptDatas, err => {
  if (err) return console.log(err);
});
