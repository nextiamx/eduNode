/*Operator*/
var $servers   = {};

var SDispatcher = function(params, req, res) {  
  var server = SDispatcher.get(params.server);
  if(server) {
    var action = server.action(params.action);
    action(params, function(it) {
      res.send(it);
    });
  } else {
    res.send("noAction");
  }
};
SDispatcher.set = function(anAlias, aServer) {
  $servers[anAlias] = aServer;
};
SDispatcher.get = function(anAlias) {
  return $servers[anAlias];
};
SDispatcher.dispatch = function(req, res) {
  var server = req.params[0] ? req.params[0].split(":")[0] : "_default_";
  var params = {
    'server' : server,
    'action' : req.params[1] 
  };
  SDispatcher(params, req, res);
} 

module.exports = SDispatcher;