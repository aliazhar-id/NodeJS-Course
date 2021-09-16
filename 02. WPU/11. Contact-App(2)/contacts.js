const fs = require('fs');
const chalk = require('chalk');
const validator = require('validator');

// membuat folder data
const dirPath = './data'
if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath);
}

// membuat file contacts.json jika belum ada
const dataPath = './data/contacts.json';
if (!fs.existsSync(dataPath)) {
  fs.writeFileSync(dataPath, '[]');
}

const simpanContact = ({ nama, email, noHP }) => {
  const contact = { nama, email, noHP };
  const file = fs.readFileSync('data/contacts.json', 'utf-8');
  const contacts = JSON.parse(file);

  // cek duplikat
  const duplikat = contacts.find(contact => contact.nama === nama);
  if (duplikat) {
    console.log(chalk.rgb(255, 0, 0).inverse.bold('Contact sudah terdaftar, gunakan nama lain!'));
    return false;
  }

  // cek Email
  if (email) {
    if (!validator.isEmail(email)) {
      console.log(chalk.rgb(255, 0, 0).inverse.bold('Email tidak valid!'));
      return false;
    }
  }

  // cek nomor hp
  if (!validator.isMobilePhone(noHP, 'id-ID')) {
      console.log(chalk.rgb(255, 0, 0).inverse.bold('Nomor HP tidak valid!'));
      return false;
    }

  contacts.push(contact)

  fs.writeFileSync('data/contacts.json', JSON.stringify(contacts, null, 2));
  console.log(chalk.green.inverse.bold('Terima Kasih sudah menginput data.'));
}

module.exports = { simpanContact };