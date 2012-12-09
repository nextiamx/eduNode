angular.module('EduCom', ['ttn']).
config(["$routeProvider", function($routeProvider) {
  $routeProvider
  .when("/home/", {})

  .when("/comunidades/", {
      templateUrl:"partials/communities/index.html", 
      controller:CommunitiesCtrl
  })
  .when("/comunidad/:_id", {
      templateUrl:"partials/communities/index.html", 
      controller:CommunitiesCtrl
  })

  .when("/cursos/", {
      templateUrl:"partials/courses/index.html"
  })
  .when("/curso/:_id", { 
      templateUrl:"partials/courses/index.html"
  })

  .when("/proyectos/", { 
      templateUrl:"partials/projects/index.html"
  })
  .when("/proyectos/:_id", {
      templateUrl:"partials/projects/index.html"
  })


  .when("/info/", {
      templateUrl:"partials/utils/info.html"
  })

  .otherwise({redirectTo: "/home/"})

   
}])
.run(function($rootScope, $http) {
  $http.get("$App:Info").success(function(r) {
    if(r.logged) {
      $rootScope.App_Actions = r.actions;
      $rootScope.App_Title = "Edunode";
    }
  });

  $rootScope.actualSection = function(theSection) {
  }
  
});

