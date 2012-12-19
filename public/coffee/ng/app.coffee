angular.module('educom', ['educomControllers'])
.config( ($routeProvider) -> 
  $routeProvider
  
  .when("/home/", 
    templateUrl : '/partials/home.html'
    controller  : 'homeCtrl'
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
      controller: "infoCtrl"
  )

  .otherwise(redirectTo: "/home/")

)

.run ($rootScope, $http) ->

  $http.get("$App:Info").success (r) ->
    if(r.logged) 
      $rootScope.App_Actions = r.actions;
      $rootScope.App_Title = "Edunode";
    console.log(r)
  
 

  $http.post('/--Edit:Communities_50c4486e021058c21f000001', {nombre : "nombre Editado"})
  .success (e) -> console.log(e)


.filter("filtro", () ->
  (input) ->
    input + " filtrado!"
)
.controller('exampleCtrl', ($scope) -> 
  $scope.alfa = "hola";
)