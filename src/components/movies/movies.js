/**
* movies Module
*
* Movies w/demo data
*/
'use strict';


var movies = angular.module('movies', ['demoApp']);

movies.config(function($stateProvider, $urlRouterProvider) {

	$stateProvider
		.state('movies', {
			display:'movies',
			url: '/movies',
			templateUrl: 'build/components/movies/views/movies.html'
		})
		.state('movies.list', {
			display:'List',
			url: '/list',
			templateUrl: 'build/components/movies/views/movies.list.html',
			controller: 'moviesListCtrl'
		})
		.state('movies.detail', {
			display:'Details',
			url: '/detail',
			templateUrl: 'build/components/movies/views/movies.detail.html',
			controller: 'moviesDetailCtrl',
			params: {user: null}
		})
		.state('movies.edit', {
			display:'Edit',
			url: '/edit',
			templateUrl: 'build/components/movies/views/movies.edit.html',
			controller: 'moviesEditCtrl',
			params: {user: null}
		})
		.state('movies.new', {
			display:'New',
			url: '/new',
			templateUrl: 'build/components/movies/views/movies.edit.html',
			controller: 'moviesEditCtrl'
		});
});