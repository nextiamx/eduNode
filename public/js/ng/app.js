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
EduCom.controller("EduComCtrl", ["$scope", function($scope) {
  console.log($scope);
  var render = function() {
    alert(100);
  }

  $scope.$on("$routeChangeSuccess", function($currRoute, $prevRoute) {
    alert(2);
  })


}]);
  