// Generated by CoffeeScript 1.4.0
(function() {

  angular.module('educom', ['educomControllers']).config(function($routeProvider) {
    return $routeProvider.when("/home/", {
      templateUrl: '/partials/home.html',
      controller: 'homeCtrl'
    }).when("/comunidades/", {
      templateUrl: "/partials/generic/list.html",
      controller: "CommunitiesCtrl"
    }).when("/cursos/", {
      templateUrl: "/partials/generic/list.html",
      controller: "CoursesCtrl"
    }).when("/proyectos/", {
      templateUrl: "/partials/generic/list.html",
      controller: "ProjectsCtrl"
    }).when("/info/", {
      templateUrl: "/partials/utils/info.html",
      controller: "InfoCtrl"
    }).otherwise({
      redirectTo: "/home/"
    });
  }).run(function($rootScope, $http) {
    $http.get("$App:Info").success(function(r) {
      if (r.logged) {
        r.actions[0].action = "home";
        $rootScope.App_Actions = r.actions;
        $rootScope.App_Title = "Edunode";
      }
      return console.log(r);
    });
    return $http.post('/--Edit:Communities_50c4486e021058c21f000001', {
      nombre: "nombre Editado"
    }).success(function(e) {
      return console.log(e);
    });
  }).filter("filtro", function() {
    return function(input) {
      return input + " filtrado!";
    };
  }).controller('exampleCtrl', function($scope) {
    return $scope.alfa = "hola";
  });

}).call(this);
