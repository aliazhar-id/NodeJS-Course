const { tulisPertanyaan, simpanContact } = require('./contacts');

const main = async () => {
  const nama = await tulisPertanyaan('Masukkan nama anda : ');
  const email = await tulisPertanyaan('Masukkan email anda : ');
  const noHp = await tulisPertanyaan('Masukkan nomor HP anda : ');

  simpanContact(nama, email, noHp);
}

main()
