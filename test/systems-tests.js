var should = require('chai').should();
var seneca_lib = require('seneca');
var systems = require('../lib/systems');


describe('systems-tests', function() {
  var seneca = null;

  beforeEach(function() {
    seneca = seneca_lib();
    seneca.use(systems);
  });

  describe('#find_system()', function() {
    it('should return a system', function(done) {
      seneca.act({role: 'systems', cmd: 'find_system', id: 1234}, function(err, system) {
        if (err) {
          return done(err);
        }
        should.exist(system);
        done();
      });
    });
  });

  afterEach(function(done) {
    seneca.close(done);
  });

});
