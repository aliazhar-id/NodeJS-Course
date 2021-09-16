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

const loadContact = () => {
  const file = fs.readFileSync('data/contacts.json', 'utf-8');
  const contacts = JSON.parse(file);
  return contacts;
}

const simpanContact = ({ nama, email, noHP }) => {
  const contact = { nama, email, noHP };
  // const file = fs.readFileSync('data/contacts.json', 'utf-8');
  // const contacts = JSON.parse(file);
  const contacts = loadContact();

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


const listContact = () => {
  const contacts = loadContact();

  console.log(chalk.cyan.inverse.bold(' Daftar Kontak : '));
  contacts.forEach(({ nama, noHP }, i) => {
    console.log(`${i+1}. ${nama} => ${noHP}`);
  });
}

// menampilkan data sebuah contact
const detailContact = (nama) => {
  const contacts = loadContact();
  const contact = contacts.find(contact => contact.nama.toLowerCase() === nama.toLowerCase());

  if (!contact) {
    console.log(chalk.rgb(255, 0, 0).inverse.bold(`${nama} tidak ditemukan!`));
    return false;
  }

  console.log(chalk.cyan.inverse.bold(contact.nama));
  console.log(contact.noHP);
  if (contact.email) {
    console.log(contact.email);
  }
}

const deleteContact = (nama) => {
  const contacts = loadContact();
  const newContacts = contacts.filter(contact => contact.nama.toLowerCase() !== nama.toLowerCase());

  if (contacts.length === newContacts.length) {
    console.log(chalk.rgb(255, 0, 0).inverse.bold(`${nama} tidak ditemukan!`));
    return false;
  }

fs.writeFileSync('data/contacts.json', JSON.stringify(newContacts, null, 2));
console.log(chalk.green.inverse.bold(`data contact ${nama} berhasil dihapus`));
}

module.exports = { simpanContact, listContact, detailContact, deleteContact };