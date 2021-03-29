const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'test', 'text.txt');

fs.writeFile(filePath, 'Созданный файл', (err) => {
    if (err) {
        throw err;
    }

    console.log('Файл создан!')

    fs.appendFile(filePath, '\nНу привет!', (err) => {
        if (err) {
            throw err;
        }
    
        console.log('Файл обновлен!')
    })
})