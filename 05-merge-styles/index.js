const fs = require('fs');
const path = require('path');
const bundle = path.join(__dirname, 'project-dist', 'bundle.css');
const sourceStyles = path.join(__dirname,'styles');
let writeStream = fs.createWriteStream(bundle, 'utf-8');

fs.readdir(sourceStyles, {withFileTypes:true}, (error,files) => {
    if (error) return console.log(error.message);
    files.forEach(dirent => {
        let filePath = path.join(__dirname, 'styles', dirent.name);
        if (dirent.isFile() && path.extname(filePath) === '.css') {
        let readStream = fs.createReadStream(filePath);
        let data = '';
        readStream.on('data', chunk => data += chunk);
        readStream.on('end', () => writeStream.write(data));
        readStream.on('error', (error) => console.log(error.message));
        }
    });
})