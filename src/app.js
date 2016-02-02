/**
* demoApp Module
*
* Demo application to show off my front-end work
*/


var demoApp = angular.module('demoApp', [
	'ui.router',
	'users',
	'movies'
]);

demoApp.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/whoops');

	$stateProvider
		.state('home', {
			display: 'Home',
			url:'/',
			module: 'root',
			templateUrl: 'build/home.html'
		})
		.state('whoops', {
			display: 'Whoops',
			url:'/whoops',
			module: 'root',
			templateUrl: 'build/whoops.html'
		});
});