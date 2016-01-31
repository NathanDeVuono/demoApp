'use strict';

users.controller('usersEditCtrl', function($scope, $state, $stateParams, usersSrv){
	if ($stateParams.user) {
		$scope.user = $stateParams.user;
		$scope.userExisting = true;
	} else {
		$scope.userExisting = false;
	}

	$scope.submit = function() {
		usersSrv.save($scope.user);
		$state.go('users.list');
	};
});