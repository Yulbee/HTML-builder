const fs = require('fs');
const path = require('path');
const file = path.join(__dirname, 'text.txt');
const {stdin, stdout} = process;
const writeStream = fs.createWriteStream(file, 'utf-8');
stdout.write('Type some words to add or type "exit" to finish\n');
stdin.on('data', data => {
    if (data.toString().trim() !== 'exit') {
        writeStream.write(data);
    }

    else {
        stdout.write('Bye-bye\n');
        process.exit();
    }
});

process.on('SIGINT', () => {
        stdout.write('Bye-bye\n');
        process.exit();
});



