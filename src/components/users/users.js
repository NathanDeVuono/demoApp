/**
* users Module
*
* Users w/demo data
*/
var users = angular.module('users', ['demoApp']);

users.config(['$stateProvider', '$urlRouterProvider',function($stateProvider, $urlRouterProvider) {

	$stateProvider
		.state('users', {
			url: '/users',
			templateUrl: 'build/users/views/users.html'
		})
		.state('users.list', {
			url: '/list',
			templateUrl: 'build/users/views/users.list.html',
			controller: 'usersListCtrl'
		})
		.state('users.detail', {
			url: '/detail',
			templateUrl: 'build/users/views/users.detail.html',
			controller: 'usersDetailCtrl',
			params: {user: null}
		})
		.state('users.edit', {
			url: '/edit',
			templateUrl: 'build/users/views/users.edit.html',
			controller: 'usersEditCtrl',
			params: {user: null}
		})
		.state('users.new', {
			url: '/new',
			templateUrl: 'build/users/views/users.edit.html',
			controller: 'usersEditCtrl'
		});
}]);

