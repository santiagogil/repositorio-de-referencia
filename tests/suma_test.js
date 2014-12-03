var test = require('tape');
var suma = require('../index.js');

test('Probando nuevo modulo', function(t) {
  t.plan(2);

  t.equal(suma(2, 2), 4, 'Dos mas dos deberia ser cuatro.');

  t.equal(suma('Hola', ' mundo!'), 'Hola mundo', 'Queremos comprobar que nuestra funcion concatene cadenas.')
});
