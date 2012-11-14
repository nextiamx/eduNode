function HomeCtrl ($scope, $rootScope, $http) {
	
} 


function CursosCtrl($scope, $rootScope, $http) {
	$rootScope.App_ActualAction = "Cursos";
	$rootScope.App_ActualSubtitle = "La idea es poner todos los cursos que se ofrecen y hacer una busqueda por temas";
}

function GruposCtrl($scope, $rootScope) {
	$rootScope.App_ActualAction = "Comunidades";
	$rootScope.App_ActualSubtitle = "Los circulos de estudios o grupos publicos (academicos o no)";
}

function UniversidadesCtrl($scope, $rootScope, $http) {
	console.log($scope);
	$rootScope.App_ActualAction = "Universidades";
	$rootScope.App_ActualSubtitle = "Lista Universidades";
	$rootScope.App_ActualAction = "Universidades";
	$http.get("/--Query:Universities").success(function(r) {
		$scope.Universities = r;
	});
}

function ProyectosCtrl($scope, $rootScope) {
	$rootScope.App_ActualAction = "Proyectos";
	$rootScope.App_ActualSubtitle = "Proyectos tambien por temas que se desarrollan en ciertas comunidades";
}

function SubjectsDListCtrl($scope, $rootScope, $http) {
	//Hay que cargar los temas principales en una especie de árbol 
	($rootScope.Subjects ||
		$http.get("/--Query:Subjects").success(function(s) {
			$rootScope.Subjects = s;
		})
	);
	//Dinámicamente asignar los temas que se relacionen con los intereses
	
}