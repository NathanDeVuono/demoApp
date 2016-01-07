demoApp.service('crudSrv', ['$http', function($http){
	this.get = function(path, config) {
		return $http({
			url: path,
			method: 'GET',
			params: config
		});
	};
}]);