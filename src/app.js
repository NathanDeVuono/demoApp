/**
* demoApp Module
*
* Demo application to show off my front-end work
*/

'use strict';

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
			templateUrl: 'build/home.html'
		})
		.state('home.whoops', {
			display: 'Whoops',
			url:'/whoops',
			templateUrl: 'build/whoops.html'
		});
});