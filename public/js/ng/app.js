angular.module('edunode', []).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.
    when('/home', {templateUrl: 'partials/home.html',   controller: HomeCtrl}).
    otherwise({redirectTo: '/home'});
  }]).run(['$http', '$rootScope', function($http, $rootScope) {
    $http.get("$App:Info").success(function(r) {

      if(r.logged) {
        $rootScope.App_Actions = r.actions;
        $rootScope.App_Title = "Edunode";
        console.log(r.actions);
      }
    });
  }]); 
