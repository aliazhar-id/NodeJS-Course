const fs = require('fs');

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


// ambil semua data di contacts.json
const loadContact = () => {
  const file = fs.readFileSync('data/contacts.json', 'utf-8');
  const contacts = JSON.parse(file);
  return contacts;
}

// cari contact berdasarkan nama
const findContact = nama => {
  const contacts = loadContact();
  const contact = contacts.find(contact => contact.nama.toLowerCase() === nama.toLowerCase());

  return contact;
}

module.exports = { loadContact, findContact };