const fs = require('fs');
const path = require('path');

fs.rmdir(path.join(__dirname, 'test'), (err) => {
    if (err) {
        throw err;
    }

    console.log('Папка удалена')
})
