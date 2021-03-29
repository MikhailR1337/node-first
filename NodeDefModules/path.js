const path = require('path');

console.log(path.basename(__filename)) // Имя файла

console.log(path.dirname(__filename)); // Путь до файла

console.log(path.extname(__filename)); // Расширение

console.log(path.parse(__filename)); // Объект parse

console.log(path.join(__dirname, 'server', 'index.html')); // Корректный путь