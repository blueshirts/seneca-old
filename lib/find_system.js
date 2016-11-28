// Create a seneca instance.
var seneca = require('seneca')();
// Connect using the default transport options.
seneca.client();
// Invoke the find system command.
seneca.act({role:'systems', cmd:'find_system', id: 1234}, function(err, system) {
  console.log(system);
}) ;
