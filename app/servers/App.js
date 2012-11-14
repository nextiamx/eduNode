var actions = {};

actions.Startup = function(params, callback) {
	callback( {
		'logged' : true,
		'actions' : [
			{action:"home",    caption: "Inicio",    icon : 'icon-home',},
			{action:"comunidades",    caption: "Comunidades",    icon : 'icon-group'},
			{action:"cursos",    caption: "Cursos",    icon : 'icon-book'},
			{action:"universidades", caption: "Universidades", icon : 'icon-bell'},
			{action:"proyectos", caption: "Proyectos", icon : 'icon-tasks'},
			{action:"info", caption: "Información", icon : 'icon-info-sign'}
		]

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