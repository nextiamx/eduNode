var SDispatcher = require('../../lib/middleware/ServerDispatcher');

SDispatcher.set('_default_', require('../../lib/servers/main'));
SDispatcher.set('App', require('../servers/App'));

module.exports = SDispatcher;