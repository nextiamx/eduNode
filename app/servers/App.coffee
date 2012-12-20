



actions = {}

actions.Startup = (params, callback) ->
  callback(
    logged  : true,
    actions : [
      {action:"",    caption: "Inicio",    icon : 'icon-home'},
      {action:"comunidades",    caption: "Comunidades",    icon : 'icon-group'},
      {action:"cursos",    caption: "Cursos",    icon : 'icon-book'},
#     {action:"universidades", caption: "Universidades", icon : 'icon-bell'},
      {action:"proyectos", caption: "Proyectos", icon : 'icon-tasks'},
      {action:"info", caption: "Información", icon : 'icon-info-sign'}
    ]
  )

actions.Login = (params, callback) ->
  us = alonso : '5070', julio  : '176'
  usrnm = params.params.username
  u = us[usrnm]
  r = false
  r = true if u and u is params.params.password
  callback(logged: r)

actions.Info = actions.Startup;

#Exports
mainServer = {}
mainServer.action = (anAction) -> actions[anAction];

module.exports = mainServer