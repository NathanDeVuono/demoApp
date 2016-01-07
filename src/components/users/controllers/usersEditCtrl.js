users.controller('usersEditCtrl', ['$scope', '$state', '$stateParams', 'userSrv', function($scope, $state, $stateParams, userSrv){
	$scope.user = $stateParams.user;

	$scope.submit = function() {
		userSrv.save($scope.user);
		$state.go('users.list');
	};
}]);