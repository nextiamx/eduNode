// Generated by CoffeeScript 1.4.0
(function() {
  var $servers, SDispatcher;

  $servers = {};

  SDispatcher = function(req, res) {
    var params, server;
    if (req.params[0]) {
      server = req.params[0].split(":")[0];
    } else {
      server = "_default_";
    }
    params = {
      server: server,
      action: req.params[1],
      params: req.body
    };
    return SDispatcher.dispatch(params, req, res);
  };

  SDispatcher.dispatch = function(params, req, res) {
    var action, server;
    server = SDispatcher.get(params.server);
    if (server) {
      action = server.action(params.action);
      if (action) {
        return action(params, function(it) {
          return res.send(it);
        });
      } else {
        return res.send('noAction');
      }
    } else {
      return res.send("noServer");
    }
  };

  SDispatcher.set = function(anAlias, aServer) {
    return $servers[anAlias] = aServer;
  };

  SDispatcher.get = function(anAlias) {
    return $servers[anAlias];
  };

  module.exports = SDispatcher;

}).call(this);
