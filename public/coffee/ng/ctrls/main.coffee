angular.module("educomControllers",[])
#.controller("HomeCtrl", ($scope, $rootScope, $http)-> false )
#.controller("NavCtrl", ($scope, $rootScope, $http, $routeParams) -> false)
#.controller("CoursesCtrl", ($scope) -> false)
.factory('apiModel', ($http) ->
  bUrl = '/--'
  models = {}
  (aModel) -> 
    if !models[aModel]
      models[aModel] = 
        query  : (q) ->
          $http.get(bUrl  + 'Query:' + aModel)
        get    : (anId) ->
          $http.get(bUrl  + 'Get:' + aModel + "_" + anId)
        remove : (anId) ->
          $http.post(bUrl + 'Delete:' + aModel + "_" + anId)
        create : (data) -> 
          $http.post(bUrl + 'Create:' + aModel  , data)
        edit   : (anId, data) ->
          $http.post(bUrl + 'Edit:' + aModel + "_" + anId, data)
    models[aModel]  
)

.controller('homeCtrl', ($scope, $rootScope) -> 
  $rootScope.actualSection = "home"
)

#Controladores Accion+ aModel + "_" + anIdes
.controller("CoursesCtrl", ($scope, $rootScope) -> 
  $scope.model = "Courses"
  $scope.singleTemplate = "/partials/courses/single.html"
  $rootScope.actualSection = "cursos"
  $scope.subjectCol = "course"
)

.controller("ProjectsCtrl", ($scope, $rootScope) -> 
  $scope.model = "Projects"
  $scope.singleTemplate = "/partials/projects/single.html"
  $rootScope.actualSection = "proyectos"
  $scope.subjectCol = "project"
 
)
.controller("CommunitiesCtrl", ($scope, $rootScope) -> 
  $scope.model = "Communities"
  $scope.singleTemplate = "/partials/communities/single.html"
  $rootScope.actualSection = "comunidades"
  $scope.subjectCol = "community"
  
)
.controller("InfoCtrl", ($scope, $rootScope) -> 
  $rootScope.actualSection = "info"
)
#GenericList
.controller('genericListCtrl', ($scope, apiModel) ->
  #fetch items from server
  apiModel($scope.model).query().success (r) -> $scope.Items = r
  $scope.setView = (aView) ->
    $scope.view = aView;
    $scope.template = "/partials/generic/" + aView + ".html" 
  
)
#GenericSingleCtrl
.controller('genericSingleCtrl', ($scope, apiModel) -> 
  
)

