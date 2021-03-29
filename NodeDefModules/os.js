const os = require('os');

console.log('Операционная система:', os.platform());

console.log('Архитектура процессора:', os.arch());

console.log('Информация по процессорам:', os.cpus());

console.log('Свободная память:', os.freemem());

console.log('Общая память:', os.totalmem());

console.log('Домашняя дериктория:', os.homedir());

console.log('Включен:', os.uptime());