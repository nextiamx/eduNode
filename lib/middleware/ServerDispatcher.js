/*Operator*/
var $servers   = {};

var SDispatcher = function(req, res) {
  var server = req.params[0] ? req.params[0].split(":")[0] : "_default_";
  var params = {
    'server' : server,
    'action' : req.params[1],
    'params' : req.body
  };
  SDispatcher.dispatch(params, req, res);
} 

SDispatcher.dispatch = function(params, req, res) {  
  var server = SDispatcher.get(params.server);
  if(server) {
    var action = server.action(params.action);
    if(action) {
      action(params, function(it) {
        res.send(it);
      });
    } else {
      res.send('noAction');
    }
  } else {
    res.send("noServer");
  }
};
SDispatcher.set = function(anAlias, aServer) {
  $servers[anAlias] = aServer;
};
SDispatcher.get = function(anAlias) {
  return $servers[anAlias];
};


module.exports = SDispatcher;