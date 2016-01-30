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
			templateUrl: 'build/users/views/users.html'
		})
		.state('users.list', {
			display:'List',
			url: '/list',
			templateUrl: 'build/users/views/users.list.html',
			controller: 'usersListCtrl'
		})
		.state('users.detail', {
			display:'Details',
			url: '/detail',
			templateUrl: 'build/users/views/users.detail.html',
			controller: 'usersDetailCtrl',
			params: {user: null}
		})
		.state('users.edit', {
			display:'Edit',
			url: '/edit',
			templateUrl: 'build/users/views/users.edit.html',
			controller: 'usersEditCtrl',
			params: {user: null}
		})
		.state('users.new', {
			display:'New',
			url: '/new',
			templateUrl: 'build/users/views/users.edit.html',
			controller: 'usersEditCtrl'
		});
});

