var should = require('chai').should();
var seneca_lib = require('seneca');

var test_plugin = function(options) {
  this.add('fn:test', function(args, done) {
    done(null, {});
  });
};

describe('seneca-tests', function() {
  describe('#fn:test()', function() {
    it('should run as an individual function', function(done) {
      // Create a Seneca instance.
      var seneca = seneca_lib();
      // Add a test function.
      seneca.add('fn:test', function(args, done) {
        // Return an empty object.
        done(null, {});
      });
      // Invoke the test function.
      seneca.act('fn:test', function(err, result) {
        if (err) {
          return done(err);
        }
        should.exist(result);
        done();
      });
    });
    it('should run as a module', function(done) {
      // Create a Seneca instance.
      var seneca = seneca_lib();
      // Register a plugin with a test function.
      seneca.use(test_plugin);
      // Invoke the test function.
      seneca.act('fn:test', function(err, result) {
        if (err) {
          return done(err);
        }
        done();
      });
    });
  });
});
