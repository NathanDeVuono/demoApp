'use strict';

demoApp.directive('daCrumbs', function($compile){
	return {
		restrict: 'E',
		scope: true,
		templateUrl: 'build/daCrumbs.html',
		controller: function($scope, $rootScope, $state) {
			if (!$scope.stateList) {
				$scope.stateList = [];
				$scope.stateList.push($state.get('home'));
			}

			$rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
				var stateExists = doesStateExist(toState);
				if (stateExists) {
					$scope.stateList = $scope.stateList.slice(0, stateExists);
				} else {
					$scope.stateList.push(toState);
				}
			});

			function doesStateExist(toState) {
				for (var state in $scope.stateList) {
					if ($scope.stateList[state] && 
						$scope.stateList[state].name == toState.name) {
						return state + 1;
					}
				}
				return false;
			}
		}
	};
});