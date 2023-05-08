const fs = require('fs');
const path = require('path');

function copyDir () {
    fs.mkdir(path.join(__dirname, 'files-copy'), {recursive:true}, error => {
        if (error) return console.log(error.message);
    });
    fs.readdir(path.join(__dirname, 'files'), {withFileTypes:true}, (error, files) => {
        if (error) return console.log(error.message);
        files.forEach(dirent => {
            fs.copyFile(path.join(__dirname, 'files', dirent.name), path.join(__dirname, 'files-copy', dirent.name), error => {
                if (error) return console.log(error.message);
            });
        });
    });
}

copyDir();

    


