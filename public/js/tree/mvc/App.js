define(["./Base"],function(Base) {
	var App = new Class({
		Extends:Base,
		debug:function(text) {
			console.log("APP :: " + text)
		}
	});
	return App;
})