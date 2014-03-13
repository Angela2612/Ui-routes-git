angular.module('rutasApp', [
	'ui.router'
])
.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
	
	$urlRouterProvider.otherwise('/')

	$stateProvider
		.state('main', {
			url: '/main',
			template: '<h2>Hola  al principal</h2><p>Este es un parrafo sencillo</p>'
		})
		.state('usuarios', {
			url: '/users',
			template: '<h2>Modificación de usuarios</h2><a ui-sref="usuarios.listado">Ir al usuarios</a><div ui-view>Aqui el listado</div>'
		});
		$stateProvider
		.state('Grupos', {
			url: '/Grupos',
			template: '<h2>Buuul</h2><p>Este es el grupo</p>' 
		});

}])