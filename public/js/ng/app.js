angular.module('edunode', []).
  config(['$routeProvider', function($routeProvider) {
/*El Route provider Asigna los Controladores y plantillas a cada ruta */
    $routeProvider.
      //Home, vista general de todo
      when('/home/',{
        templateUrl : 'partials/home.html',   
        controller  : HomeCtrl
      }).

      //Grupos (Circulos de Estudios)
      when('/comunidades/', {
        templateUrl : 'partials/ejemplo/index.html',  
        controller  : GruposCtrl
      }).

      //Cursos (Seguimiento de los cursos)
      when('/cursos/',  { 
        templateUrl : 'partials/ejemplo/index.html',  
        controller  : CursosCtrl
      }).

      //Universidades (Búsqueda de Universidades navegación por campus, carrera, cursos)
      when('/universidades/', {
        templateUrl : 'partials/ejemplo/index.html',   
        controller  : UniversidadesCtrl
      }).

      //Proyectos (Seguimiento de los proyectos que se hacen)
      when('/proyectos/', {
        templateUrl: 'partials/ejemplo/index.html',   
        controller: ProyectosCtrl
      }).

      when('/info/', {
        templateUrl : 'partials/utils/info.html'
      }).

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
