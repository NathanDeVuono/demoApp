'use strict';

demoApp.directive('daCrumbs', function($compile){
	return {
		restrict: 'E',
		scope: true,
		templateUrl: 'build/daCrumbs.html',
		link: function($scope, elem, attrs, controller) {
			var nav = elem[0];

			var ul = document.createElement('ul');

			var repeat = document.createElement('li');
			repeat.setAttribute('ng-repeat', 'state in stateList');

			var navLink = document.createElement('a');
			navLink.setAttribute('ui-sref', '{{state.name}}');
			navLink.textContent = '{{state.display}}';

			repeat.appendChild(navLink);
			ul.appendChild(repeat);

			nav.appendChild(ul);
			$compile(ul)($scope);
		},
		controller: function($scope, $rootScope, $state) {
			$scope.stateList = [];
			$scope.stateList.push($state.get('home'));

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
					if ($scope.stateList[toState] && 
						$scope.stateList[toState].name == toState.name) {
						return toState;
					}
				}
				return false;
			}
		}
	};
});