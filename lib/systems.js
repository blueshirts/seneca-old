module.exports = function(options) {

  this.add({role: 'systems', cmd: 'find_system'}, find_system);

  function find_system(args, done) {
    done(null, {
      id: args.id,
      name: `Name${args.id}`
    });
  }

}
