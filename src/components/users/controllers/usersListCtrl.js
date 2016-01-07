users.controller('usersListCtrl', ['$rootScope', '$scope', 'userSrv', function($rootScope, $scope, usersSrv){
	if (!usersSrv.users) {
		$scope.userListLoading = true;
		usersSrv.getUsersList();
	} else {
		$scope.users = usersSrv.users;
	}

	$rootScope.$on('userListLoaded', function(event, users) {
		$scope.users = users;
		$scope.userListLoading = false;
	});
}]);