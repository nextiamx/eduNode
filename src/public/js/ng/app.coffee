angular.module('educom', ['educomControllers'])
.config( ($routeProvider) -> 
  $routeProvider
  
  .when("/", 
    templateUrl : '/partials/home.html'
    controller  : 'HomeCtrl'
  )

  .when("/comunidades/", 
    templateUrl : "/partials/generic/list.html"
    controller : "CommunitiesCtrl"
  )
  .when("/comunidad/:_id", 
    templateUrl : "/partials/generic/view.html"
    controller : "CommunitiesCtrl"
  )

  .when("/cursos/", 
    templateUrl : "/partials/generic/list.html"
    controller : "CoursesCtrl"
  )
  .when("/curso/:_id", 
    templateUrl:"/partials/generic/view.html"
    controller : "CoursesCtrl"
  )

  .when("/proyectos/", 
    templateUrl : "/partials/generic/list.html"
    controller  : "ProjectsCtrl"
  )
  .when("/proyecto/:_id", 
    templateUrl:"/partials/generic/view.html"
    controller  : "ProjectsCtrl"
  )

  .when("/info/", 
      templateUrl:"/partials/utils/info.html"
      controller: "InfoCtrl"
  )

  .when("/evento/:_id", 
    templateUrl:"/partials/generic/view.html"
    controller  : "EventsCtrl"
  )

  .when("/discusion/:_id", 
    templateUrl:"/partials/generic/view.html"
    controller  : "DiscussionsCtrl"

  )

  .when("/actividad/:_id", 
    templateUrl:"/partials/generic/view.html"
    controller  : "ActivitiesCtrl"
  )

  #.otherwise(redirectTo: "/")
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