var EduCom = angular.module('EduCom', []);
EduCom.config(["$routeProvider", function($routeProvider) {
  $routeProvider
    .when("/", {
      jAction : 1
    })
    .otherwise({
      redirectTo : "/"
    });

}]);

  