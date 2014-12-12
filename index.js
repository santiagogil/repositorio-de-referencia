var domify = require('domify');

var html = '<h1>Bienvenido al servidor de desarrollo</h2>';
document.body.appendChild(domify(html));
