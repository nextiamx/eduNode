define(["juggler/Application", "juggler/lib/http", 'juggler/auth/login', 'juggler/lib/ViewService'], 
  function(Application, http, JugglerLogin, ViewService) {
  
  var EduNodeMain = function() {
    var App = new Application();
    //NodePoint
   
    //View Service 
    App.st('@view', ViewService({'edunode':'js/edunode/views/','juggler':'js/juggler/views/'}));

    //Authentication Service
    App.st('@auth', function(objct, callback) {
      http.post('$App:Login', {params:objct}, function(res) {
        App.st('App:Info', res);
        callback && ((res.logged && callback(true)) || callback(false));
      });
    });
    //Default Login Case
    App.st('@login', function(onLogin, onFail) {
      JugglerLogin(App.gt('@auth'), onLogin, onFail);
    });

    /*
    App.use(function(app, next) {
      app.gt('@view')('edunode:asdf', function(v) {
        app.view(v);
        next();
      });
    });
    */
    //Check for startup
    App.use(function(app, next) {
      http.get('$App:Startup', null, function(res) {
        (res.logged && next()) || (app.gt('@login')(next)); 
      });
    });

    App.use(function(app, next) {
      app.debug("Inicializar Menús");
      app.debug("Inicializar ");
      next();
    });
    App.use(function(app, next) {
      app.debug("@init");
      next();
    });

    App.use(Application.Router);

    App.when(/^\/?$/, function(app, match) {
      alert(match);
    });
    /*
    App.when(/^\/(\w+)\/(\w+)$/, function(app, match) {
     // alert(match);
    });\*/
    return App;
  }
  return EduNodeMain;
});