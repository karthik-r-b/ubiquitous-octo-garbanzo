const sh = require('shelljs');
const fileName = __dirname + "\\requirements.txt";
const fs = require('fs');
const chalk = require('chalk');
// reading the data from file packages to string data
let data = fs.readFileSync(fileName).toString();
// regex for replacing the new line with space character
data = data.replace(/(\r\n|\n|\r)/gm, ' ');
// splitting the string using split keyword
data = data.split(" ");
// to avoid the event block
require('events').EventEmitter.defaultMaxListeners = 15;
// traversing the array of packages
data.forEach((value) => {
  sh.exec('pip install ' + value, (code, stderr, stdout) => {
    if (code !== 0) {
      sh.echo(chalk.redBright(`${value} failed`));
      return;
    }
    sh.echo(chalk.greenBright(`${value} success`));
  });
})