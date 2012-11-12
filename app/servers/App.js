var actions = {};

actions.Startup = function(params, callback) {
	callback( {
		'logged' : false
	});
};

actions.Login = function(params, callback) {
	var us = {
		'alonso' : '5070',
		'julio'  : '176',
 	};

 	var u = us[params.params.username];
 	var r = false;
 	if(u && u  == params.params.password) {
 		r = true;
 	}
 	callback({'logged': r});
}
actions.Info = actions.Startup;


/*Exports*/
var mainServer = {};
mainServer.action = function(anAction) {
	return actions[anAction];
};
module.exports = mainServer;