define(["./http"], function(http) {
	
	var JService = function(ns, action, params, callback) {
		var uri = "/$";
		uri = ns ? uri + ns + ":" : uri;
		uri = uri + action;
		return http.post(uri, {params:params}, callback);
	}	
	return JService;
});