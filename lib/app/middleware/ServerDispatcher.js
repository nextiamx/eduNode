// Generated by CoffeeScript 1.4.0
(function() {
  var SDispatcher;

  SDispatcher = require('../../lib/middleware/ServerDispatcher');

  SDispatcher.set('_default_', require('../../lib/servers/main'));

  SDispatcher.set('App', require('../servers/App'));

  module.exports = SDispatcher;

}).call(this);
