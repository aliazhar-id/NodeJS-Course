const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

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

const tulisPertanyaan = (pertanyaan) => {
  return new Promise((resolve, reject) => {
    rl.question(pertanyaan, jawaban => {
      resolve(jawaban);
    });
  });
}

const simpanContact = (nama, email, noHp) => {
  const contact = { nama, email, noHp };
  const file = fs.readFileSync('data/contacts.json', 'utf-8');
  const contacts = JSON.parse(file);
  contacts.push(contact)

  fs.writeFileSync('data/contacts.json', JSON.stringify(contacts, null, 2));
  console.log('Terima Kasih sudah menginput data.');
  rl.close();
}

module.exports = { tulisPertanyaan, simpanContact }