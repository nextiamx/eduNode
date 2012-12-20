angular.module('educom', ['educomControllers'])
.config( ($routeProvider) -> 
  $routeProvider
  
  .when("/inicio/", 
    templateUrl : '/partials/home.html'
    controller  : 'InicioCtrl'
  )


  .when("/comunidades/", 
      templateUrl : "/partials/generic/list.html"
      controller : "CommunitiesCtrl"
  )

 # .when("/comunidad/:_id", 
 #     templateUrl : "/partials/communities/index.html"
 #)

  .when("/cursos/", 
      templateUrl : "/partials/generic/list.html"
      controller : "CoursesCtrl"
  )

#  .when("/curso/:_id", 
#      templateUrl:"/partials/courses/index.html"
#  )

  .when("/proyectos/", 
       templateUrl : "/partials/generic/list.html"
       controller  : "ProjectsCtrl"
  )
#  .when("/proyectos/:_id", 
#      templateUrl:"/partials/projects/index.html"
#  )


  .when("/info/", 
      templateUrl:"/partials/utils/info.html"
      controller: "InfoCtrl"
  )

  .otherwise(redirectTo: "/inicio/")

)

.run ($rootScope, $http) ->

  #$http.get("$App:Info").success (r) ->
  #  if(r.logged) 
  #    r.actions[0].action = "home"
  #    $rootScope.App_Actions = r.actions
  #    $rootScope.App_Title = "Edunode"
  #  console.log(r)
  
  #$http.post('/--Edit:Communities_50c4486e021058c21f000001', {nombre : "nombre Editado"})
  #.success (e) -> console.log(e)

  actions = []
  actions.push(action : "inicio", caption : "Inicio")
  actions.push(action : "info", caption : "Informacion")
  

  $rootScope.App_Actions = actions;