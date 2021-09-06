const validator = require('validator');
const chalk = require('chalk');

// console.log(validator.isEmail('aliazhar0555@gmail.com'));
// console.log(validator.isMobilePhone('6282254119188', 'id-ID'));

console.log(chalk.bold.italic.strikethrough.bgBlue.inverse('Hello World!'));
const pesan = chalk`Lorema ipasum {bgRed.black dolor sit}, amet consectetur {bgYellow.strikethrough adipisicing} elit. Culpa, a.`;
console.log(pesan);