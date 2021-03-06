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

.controller('HomeCtrl', ($scope, $rootScope) -> 
  $rootScope.actualSection = "inicio"
)
.controller('leftBarCtrl', ($scope) ->
  $scope.vinculacion = []
  $scope.vinculacion.push (name:"Comunidades", icon:"icon-group", action : "comunidades")
  $scope.vinculacion.push (name:"Proyectos", icon:"icon-road", action : "proyectos")
  $scope.vinculacion.push (name:"Cursos", icon:"icon-book", action:"cursos")

)








#Controladores Accion+ aModel + "_" + anIdes
.controller("CoursesCtrl", ($scope, $rootScope) -> 
  $scope.model = "Courses"
  $scope.modelName = "curso"
  $scope.singleTemplate = "/partials/communities/single.html"
  $rootScope.actualSection = "cursos"
  $scope.subjectCol = "course"
)

.controller("ProjectsCtrl", ($scope, $rootScope) -> 
  $scope.model = "Projects"
  $scope.modelName = "proyecto"
  $scope.singleTemplate = "/partials/communities/single.html"
  $rootScope.actualSection = "proyectos"
  $scope.subjectCol = "project"
 
)
.controller("CommunitiesCtrl", ($scope, $rootScope) -> 
  $scope.model = "Communities"
  $scope.modelName = "comunidad"
  $scope.singleTemplate = "/partials/communities/single.html"
  $rootScope.actualSection = "comunidades"
  $scope.subjectCol = "community"
  
)

.controller("EventsCtrl", ($scope, $rootScope) -> 
  $scope.model = "Events"
  $scope.modelName = "eventos"
  $scope.singleTemplate = "/partials/communities/single.html"
  $rootScope.actualSection = "eventos"
  $scope.subjectCol = "Event"
  
)

.controller("ActivitiesCtrl", ($scope, $rootScope) -> 
  $scope.model = "Activities"
  $scope.modelName = "actividades"
  $scope.singleTemplate = "/partials/communities/single.html"
  $rootScope.actualSection = "actividades"
  $scope.subjectCol = "Activities"
  
)

.controller("DiscussionsCtrl", ($scope, $rootScope) -> 
  $scope.model = "Discussions"
  $scope.modelName = "discusion"
  $scope.singleTemplate = "/partials/communities/single.html"
  $rootScope.actualSection = "discusiones"
  $scope.subjectCol = "Discussion"
  
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
.controller('genericSingleCtrl', ($scope, apiModel,  $routeParams) -> 
 

  apiModel($scope.model).get($routeParams._id).success (r) -> 
    console.log(r)
    $scope.item = r
)


