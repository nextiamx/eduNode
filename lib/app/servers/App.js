// Generated by CoffeeScript 1.4.0
(function() {
  var actions, mainServer;

  actions = {};

  actions.Startup = function(params, callback) {
    return callback({
      logged: true,
      actions: [
        {
          action: "",
          caption: "Inicio",
          icon: 'icon-home'
        }, {
          action: "comunidades",
          caption: "Comunidades",
          icon: 'icon-group'
        }, {
          action: "cursos",
          caption: "Cursos",
          icon: 'icon-book'
        }, {
          action: "proyectos",
          caption: "Proyectos",
          icon: 'icon-tasks'
        }, {
          action: "info",
          caption: "Información",
          icon: 'icon-info-sign'
        }
      ]
    });
  };

  actions.Login = function(params, callback) {
    var r, u, us, usrnm;
    us = {
      alonso: '5070',
      julio: '176'
    };
    usrnm = params.params.username;
    u = us[usrnm];
    r = false;
    if (u && u === params.params.password) {
      r = true;
    }
    return callback({
      logged: r
    });
  };

  actions.Info = actions.Startup;

  mainServer = {};

  mainServer.action = function(anAction) {
    return actions[anAction];
  };

  module.exports = mainServer;

}).call(this);
