require('dotenv').config({ path: './.env' });
const fs = require('fs');
const crypto = require('crypto-js');

const { NODE_ENV, ENCRYPTION_KEY_WORDS, ENCRYPTION_KEY_WORDS_LOCAL } = process.env;

const encryptionKeyWords = NODE_ENV === 'production'
  ? ENCRYPTION_KEY_WORDS
  : ENCRYPTION_KEY_WORDS_LOCAL;

const encryptedFile = NODE_ENV === 'production'
  ? 'encrypted-prod.json'
  : 'encrypted-dev.json';

let rawdata = fs.readFileSync(encryptedFile);
let globalEnvJSON = JSON.parse(rawdata);

const encryptDatas = crypto.AES.encrypt(JSON.stringify(globalEnvJSON), encryptionKeyWords).toString();

fs.writeFile('encrypted.txt', encryptDatas, err => {
  if (err) return console.log(err);
});
