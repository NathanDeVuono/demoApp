'use strict';

demoApp.directive('daNav', function($state){
	return {
		restrict: 'E',
		link: function($scope, elem, attrs, controller) {
			var states = $state;
		}
	};
});