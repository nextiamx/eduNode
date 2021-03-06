// Generated by CoffeeScript 1.4.0
(function() {

  angular.module("educomControllers", []).factory('apiModel', function($http) {
    var bUrl, models;
    bUrl = '/--';
    models = {};
    return function(aModel) {
      if (!models[aModel]) {
        models[aModel] = {
          query: function(q) {
            return $http.get(bUrl + 'Query:' + aModel);
          },
          get: function(anId) {
            return $http.get(bUrl + 'Get:' + aModel + "_" + anId);
          },
          remove: function(anId) {
            return $http.post(bUrl + 'Delete:' + aModel + "_" + anId);
          },
          create: function(data) {
            return $http.post(bUrl + 'Create:' + aModel, data);
          },
          edit: function(anId, data) {
            return $http.post(bUrl + 'Edit:' + aModel + "_" + anId, data);
          }
        };
      }
      return models[aModel];
    };
  }).controller('HomeCtrl', function($scope, $rootScope) {
    return $rootScope.actualSection = "inicio";
  }).controller('leftBarCtrl', function($scope) {
    $scope.vinculacion = [];
    $scope.vinculacion.push({
      name: "Comunidades",
      icon: "icon-group",
      action: "comunidades"
    });
    $scope.vinculacion.push({
      name: "Proyectos",
      icon: "icon-road",
      action: "proyectos"
    });
    return $scope.vinculacion.push({
      name: "Cursos",
      icon: "icon-book",
      action: "cursos"
    });
  }).controller("CoursesCtrl", function($scope, $rootScope) {
    $scope.model = "Courses";
    $scope.modelName = "curso";
    $scope.singleTemplate = "/partials/communities/single.html";
    $rootScope.actualSection = "cursos";
    return $scope.subjectCol = "course";
  }).controller("ProjectsCtrl", function($scope, $rootScope) {
    $scope.model = "Projects";
    $scope.modelName = "proyecto";
    $scope.singleTemplate = "/partials/communities/single.html";
    $rootScope.actualSection = "proyectos";
    return $scope.subjectCol = "project";
  }).controller("CommunitiesCtrl", function($scope, $rootScope) {
    $scope.model = "Communities";
    $scope.modelName = "comunidad";
    $scope.singleTemplate = "/partials/communities/single.html";
    $rootScope.actualSection = "comunidades";
    return $scope.subjectCol = "community";
  }).controller("EventsCtrl", function($scope, $rootScope) {
    $scope.model = "Events";
    $scope.modelName = "eventos";
    $scope.singleTemplate = "/partials/communities/single.html";
    $rootScope.actualSection = "eventos";
    return $scope.subjectCol = "Event";
  }).controller("ActivitiesCtrl", function($scope, $rootScope) {
    $scope.model = "Activities";
    $scope.modelName = "actividades";
    $scope.singleTemplate = "/partials/communities/single.html";
    $rootScope.actualSection = "actividades";
    return $scope.subjectCol = "Activities";
  }).controller("DiscussionsCtrl", function($scope, $rootScope) {
    $scope.model = "Discussions";
    $scope.modelName = "discusion";
    $scope.singleTemplate = "/partials/communities/single.html";
    $rootScope.actualSection = "discusiones";
    return $scope.subjectCol = "Discussion";
  }).controller("InfoCtrl", function($scope, $rootScope) {
    return $rootScope.actualSection = "info";
  }).controller('genericListCtrl', function($scope, apiModel) {
    apiModel($scope.model).query().success(function(r) {
      return $scope.Items = r;
    });
    return $scope.setView = function(aView) {
      $scope.view = aView;
      return $scope.template = "/partials/generic/" + aView + ".html";
    };
  }).controller('genericSingleCtrl', function($scope, apiModel, $routeParams) {
    return apiModel($scope.model).get($routeParams._id).success(function(r) {
      console.log(r);
      return $scope.item = r;
    });
  });

}).call(this);
