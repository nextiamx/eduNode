var SDispatcher = require('../../lib/middleware/ServerDispatcher');

SDispatcher.set('_default_', require('../../lib/servers/main'));

module.exports = SDispatcher;