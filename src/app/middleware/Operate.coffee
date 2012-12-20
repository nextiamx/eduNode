Operate = require '../../lib/middleware/Operate'

Operate.set '_default_', require('../../lib/operators/crud') 

module.exports = Operate;