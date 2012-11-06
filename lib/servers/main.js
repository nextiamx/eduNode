var actions = {};

actions.Server = function(params, callback) {
	callback("SerADFSADSFver");
};
actions.Version = actions.Server;


/*Exports*/
var mainServer = {};
mainServer.action = function(anAction) {
	return actions[anAction];
};
module.exports = mainServer;