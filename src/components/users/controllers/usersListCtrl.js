

users.controller('usersListCtrl', function($rootScope, $scope, usersSrv){
	usersSrv.users().then(function(response) {
		$scope.users = response;
	});
});