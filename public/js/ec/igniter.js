var EduCom = juggler.app("EduCom", []);

EduCom.configure(function(app) {
	app.est("@HashWatcher", juggler.HashWatcher);
	app.est("@Routes");
});

EduCom.use(function(app, next) {
	app.debug("Require App Config");
	next();
});

EduCom.use(function(app, next) {
	var HashWatcher = app.obt("@HashWatcher");

	HashWatcher().addEvent("change", function(b, a){
		app.debug(a + " -» " +b);
	});
});


EduCom.run($(document.body));