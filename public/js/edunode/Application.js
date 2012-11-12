define(["juggler/Application", "juggler/lib/http"], function(Application, http) {
	
	var EduNode = function() {
		var App = Application();
		App.use(function(next) {
			http.get('$App:Info', null, function(res) {
				if(res.logged) {
					App.st('AppInfo' , res);
				} else {
					App.goTo("/login/");
				}
			});
		});

		App.use(function(next) {
			console.log("incializando applicacion Main Controller");
			next();
		});

		App.use(function(next) {
			console.log("Send To Action");
			next();
		});

		App.use(Application.Router);

		App.when(/^\/?$/, function(app, match) {
			alert(match);
		});

		App.when(/^\/login\/?$/, function(app, match) {
			alert("No LoggedIn");
		});

		App.when(/^\/(\w+)\/(\w+)$/, function(app, match) {
			alert(match);
		});

		return App;
	}

	return EduNode;

});