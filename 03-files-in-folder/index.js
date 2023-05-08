const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname, 'secret-folder');
fs.readdir(dirPath, {withFileTypes: true}, (error, files) => {
    if (error) return console.log(error.message);
    files.forEach(dirent => {
        if (dirent.isFile()) {
            let filePath = path.join(__dirname, 'secret-folder', dirent.name);
            fs.stat(filePath, (error,stat) => {
                if (error) return console.log(error.message);
                console.log(`${path.basename(filePath).split('.')[0]} - ${path.extname(filePath).split('.')[1]} - ${stat.size}b`)
            })

        }
    })
})
