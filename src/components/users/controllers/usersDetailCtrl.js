users.controller('usersDetailCtrl', ['$scope', '$stateParams', function($scope, $stateParams){
	$scope.user = $stateParams.user;
}]);