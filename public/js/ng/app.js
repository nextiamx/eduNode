angular.module('edunode', []).
  config(['$routeProvider', function($routeProvider) {
    /*El Route provider Asigna los Controladores y plantillas a cada ruta*/
    $routeProvider.
      //Home, vista general de todo
      when('/',{
        templateUrl : 'partials/home.html',   
        controller  : HomeCtrl
      }).
      //Grupos (Circulos de Estudios)
      when('/cursos/', {
        templateUrl : 'partials/courses/index.html',  
        controller  :  CoursesCtrl
      }).
      //Communities
      when('/comunidades/', {
        templateUrl : 'partials/communities/index.html',
        controller  : CommunitiesCtrl
      }).
      when('/comunidad/:id', {
        templateUrl : 'partials/communities/view.html',
        controller  : SingleCtrl
      }).

      when('/info/', {
        templateUrl : 'partials/utils/info.html'
      }).

      otherwise({redirectTo: '/'});
  }]).run(RunCtrl); 
