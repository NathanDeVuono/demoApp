// This directive initially had a bunch of DOM manipulation in it
// using native DOM methods to be all efficient and whatnot
// but it ended up being better to just use a damn template.
// $compile loops suck.


demoApp.directive('daCrumbs', function() {
    return {
        restrict: 'E',
        scope: true,
        templateUrl: 'build/daCrumbs.html',
        controller: function($scope, $rootScope, $state) {
            $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
                var stateExists = doesStateExist(toState);
                var sameModule = isSameModule(toState);
                var parents = stateParents($state.$current, []);
                $scope.stateList = parents;
                $scope.stateList.unshift($state.get('home'));
            });

            function doesStateExist(toState) {
                for (var state in $scope.stateList) {
                    if ($scope.stateList[state] &&
                        $scope.stateList[state].name == toState.name) {
                        return parseInt(state) + 1;
                    }
                }
                return false;
            }

            function isSameModule(toState) {
                for (var state in $scope.stateList) {
                    if ($scope.stateList[state].module == toState.module) {
                        return true;
                    }
                }
                return false;
            }

            function stateParents(state, parents) {
            	// Takes in a state and an array of its parents, returns an array of parents || false
            	if (!state.self.abstract) {
            		parents.unshift(state.self);
            		stateParents(state.parent, parents);
            		return parents;
            	}
            	return false;
            }
        }
    };
});