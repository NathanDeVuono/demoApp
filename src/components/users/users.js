/**
* users Module
*
* Users w/demo data
*/

'use strict';

var users = angular.module('users', ['demoApp']);

users.config(function($stateProvider, $urlRouterProvider) {

	$stateProvider
		.state('users', {
			display:'Users',
			url: '/users',
			templateUrl: 'build/components/users/views/users.html'
		})
		.state('users.list', {
			display:'List',
			url: '/list',
			templateUrl: 'build/components/users/views/users.list.html',
			controller: 'usersListCtrl'
		})
		.state('users.detail', {
			display:'Details',
			url: '/detail',
			templateUrl: 'build/components/users/views/users.detail.html',
			controller: 'usersDetailCtrl',
			params: {user: null}
		})
		.state('users.edit', {
			display:'Edit',
			url: '/edit',
			templateUrl: 'build/components/users/views/users.edit.html',
			controller: 'usersEditCtrl',
			params: {user: null}
		})
		.state('users.new', {
			display:'New',
			url: '/new',
			templateUrl: 'build/components/users/views/users.edit.html',
			controller: 'usersEditCtrl'
		});
});

