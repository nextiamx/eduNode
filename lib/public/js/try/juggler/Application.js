define(['juggler/lib/Controller'], function(Controller) {
  var hashin  = function(aHash) {return aHash.substring(1, aHash.length);}
  var Application = new Class({
    Extends : Controller,
    goTo : function(condition) {
      var condition = "#" + condition;
      window.location.hash = condition;
      this.launch(hashin(condition));
    },
    debug: function(msg) {
      console.log("DEBUG>> " + msg)
    }
  });
  Application.Router = function(app, next) {
    var oldHash = window.location.hash;
    var hasher  = function() {
      var newHash = window.location.hash;
      if(newHash != oldHash) {
        app.debug("NEW URL: " + newHash);
        app.launch(hashin(newHash));
      }
      oldHash = newHash;
    };
    app.launch(hashin(oldHash));
    hasher.periodical(100, app);
    next();
  }

  return Application;
});