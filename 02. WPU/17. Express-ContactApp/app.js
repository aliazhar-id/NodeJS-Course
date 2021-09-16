const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const { loadContact, findContact } = require('./utils/contacts');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(expressLayouts); // Third-party Middleware
app.use(express.static('public')); // Build-in middleware

// menggunakan kode di bawah ini, supaya tidak perlu memberi layout di setiap route
app.set('layout', '../layouts/main-layout');

app.get('/', (req, res) => {
  // res.sendFile('./index.html', { root: __dirname });
  const mahasiswa = [
    {
      nama: 'aliazhar',
      email: 'aliazhar@gmail.com'
    },
    {
      nama: 'budi',
      email: 'budi@gmail.com'
    },
    {
      nama: 'solem',
      email: 'solem@gmail.com'
    }
  ];

  res.render('index', {
    nama: 'aliazhar',
    title: 'Halaman Home',
    mahasiswa,
    // layout: '../layouts/main-layout',
  });
});

app.get('/about', (req, res,) => {
  // res.sendFile('./about.html', { root: __dirname });
  res.render('about', {
    // layout: '../layouts/main-layout',
    title: 'Halaman About'
  });
});

app.get('/contact', (req, res) => {
  // res.sendFile('./contact.html', { root: __dirname });
  const contacts = loadContact();
  res.render('contact', {
    // layout: '../layouts/main-layout',
    title: 'Halaman Contact',
    contacts,
  });
});

app.get('/contact/:nama', (req, res) => {
  // res.sendFile('./contact.html', { root: __dirname });
  const contact = findContact(req.params.nama);
  res.render('detail', {
    // layout: '../layouts/main-layout',
    title: 'Halaman Detail Contact',
    contact,
  });
});

app.use('/', (req, res) => {
  res.status(404);
  res.send('<h1>404</h1>');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})