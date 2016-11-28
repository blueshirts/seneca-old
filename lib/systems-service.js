// Require Seneca.
var seneca = require('seneca')();
// Load the systems plugin.
seneca.use('./systems.js');
// Listen using the default transport.
seneca.listen();
