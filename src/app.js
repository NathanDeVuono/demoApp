/**
* demoApp Module
*
* Demo application to show off my front-end work
*/
var demoApp = angular.module('demoApp', [
	'ui.router',
	'users'
]);

demoApp.config(['$stateProvider', '$urlRouterProvider',function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/whoops');

	$stateProvider
		.state('whoops', {
			url:'/whoops',
			templateUrl: 'build/whoops.html'
		});
}]);