// Core module
// File System
const fs = require('fs');

// menuliskan string ke file(syncronous)
// try {
//   fs.writeFileSync('data/test.txt', 'Hello World secara syncronous');
// } catch (err) {
//   console.log(err);
// }

// menuliskan string ke file(asyncronous)
// fs.writeFile('test.txt', 'Hello World secara asyncronous', (err) => {
//   console.log(err);
// });

// membaca isi file(Syncronous)
// const data = fs.readFileSync('data/test.txt',);
// console.log(data.toString());

// membaca isi file(Asyncronous)
// fs.readFile('datas/test.txt', 'utf-8', (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// Readline
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


// Versi aliazhar
rl.question('Masukkan nama anda : ', nama => {
  rl.question('Masukkan nomor HP anda : ', noHP => {
    let contact = JSON.parse(fs.readFileSync('data/contacts.json', 'utf-8'));
    contact.push({nama,noHP});
    fs.writeFileSync('data/contacts.json', JSON.stringify(contact, null, 2));
    rl.close();
  });
});


// Versi WPU
// rl.question('Masukkan nama anda : ', nama => {
//   rl.question('Masukkan nomor HP anda : ', noHP => {
//     const contact = { nama, noHP };
//     const file = fs.readFileSync('data/contacts.json', 'utf-8');
//     const contacts = JSON.parse(file);
//     contacts.push(contact)

//     fs.writeFileSync('data/contacts.json', JSON.stringify(contact, null, 2));
//     console.log('Terima Kasih sudah menginput data.');
//     rl.close();
//   });
// });