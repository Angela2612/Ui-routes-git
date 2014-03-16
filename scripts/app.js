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
		})
		
		.state('GrupoUsuario1', {
			url: '/otra',
			template:'<h3>Aquí mostraremos el listado de lo usuarios</h3><a ui-sref="GrupoUsuario1.recorrido">Ir al recorrido</a><div ui-view></div>'
		})
		.state('GrupoUsuario1.recorrido', {
			url: '/otras',
			template:'<ul><li>Angela</li><li>Tatiana</li><li>Fabio</li>'
		});
}])