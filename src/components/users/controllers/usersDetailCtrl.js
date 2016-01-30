'use strict';

users.controller('usersDetailCtrl', function($scope, $stateParams){
	$scope.user = $stateParams.user;
});