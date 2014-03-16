angular.module('grupoUno')
.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider) {
	
	$stateProvider
		.state('GrupoUsuario1.recorrido', {
			url: '/aaa',
			template: '<ul><li>Tatiana</li><li>Angela</li><li>Fabio</li></ul>',
			controller: function($scope, $http){
				//$scope.on();
				$http({method: 'GET', url: 'http://127.0.0.1:8000/puntajes_malos'}).
				    success(function(data, status, headers, config) {
				      console.log("Datos devueltos: " + data);
				    }).
				    error(function(data, status, headers, config) {
				      // called asynchronously if an error occurs
				      // or server returns response with an error status.
				      console.log("No se pudo conectar a Django");
				    });
			}
		});

}])