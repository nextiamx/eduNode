angular.module("educomControllers",[])
.controller("HomeCtrl", ($scope, $rootScope, $http)-> false )
.controller("NavCtrl", ($scope, $rootScope, $http, $routeParams) -> false)
.controller("CoursesCtrl", ($scope) -> false)
.controller("CommunitiesCtrl", ($scope) -> false)


.directive 'eduGrid', () -> 
  directiveDefinitionObject = 
    priority: 0
    restrict: 'A'
    link:(scope, iElement, iAttrs) ->
      $(iElement[0])
      .addEvent 'click', (ev) ->
        ev.stop()
        alert(0)
 



