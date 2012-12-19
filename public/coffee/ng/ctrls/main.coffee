angular.module("educomControllers",[])
#.controller("HomeCtrl", ($scope, $rootScope, $http)-> false )
#.controller("NavCtrl", ($scope, $rootScope, $http, $routeParams) -> false)
#.controller("CoursesCtrl", ($scope) -> false)

.controller('homeCtrl', ($scope, $rootScope) -> 
	$rootScope.actualSection = "home"
)

#Controladores Acciones
.controller("CoursesCtrl", ($scope, $rootScope) -> 
	$rootScope.actualSection = "cursos"
	$scope.subjectCol = "course"
)
.controller("ProjectsCtrl", ($scope, $rootScope) -> 
	$rootScope.actualSection = "proyectos"
	$scope.subjectCol = "project"
)
.controller("CommunitiesCtrl", ($scope, $rootScope) -> 
	$rootScope.actualSection = "comunidades"
	$scope.subjectCol = "community"
)
.controller("InfoCtrl", ($scope, $rootScope) -> 
	$rootScope.actualSection = "info"
)
#GenericList
.controller('genericListCtrl', ($scope) -> 
	$scope.Items = []
	$scope.Items.push(communitie : 'Ateneo')
	$scope.Items.push(communitie : 'Anathema')
	$scope.Items.push(communitie : 'Unipornios')
)



