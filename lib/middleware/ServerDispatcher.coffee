$servers   = {}

SDispatcher = (req, res) ->
  if req.params[0] 
    server = req.params[0].split(":")[0]
  else
    server = "_default_"
  
  params = 
    server : server
    action : req.params[1]
    params : req.body

  SDispatcher.dispatch params, req, res


SDispatcher.dispatch = (params, req, res)-> 
  server = SDispatcher.get(params.server)
  if server 
    action = server.action(params.action)
    if action  
      action params, (it) ->
        res.send it
    else 
      res.send 'noAction'
  else 
    res.send "noServer"
  

SDispatcher.set = (anAlias, aServer) ->
  $servers[anAlias] = aServer

SDispatcher.get = (anAlias) ->
  $servers[anAlias]



module.exports = SDispatcher;