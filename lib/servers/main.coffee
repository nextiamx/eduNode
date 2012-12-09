actions = {}

actions.Server = (params, callback) ->
  callback("SerADFSADSFver")
  
actions.Version = actions.Server

mainServer = {}
mainServer.action = (anAction) ->
  actions[anAction];

module.exports = mainServer;