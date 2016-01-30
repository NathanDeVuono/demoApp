'use strict';

users.service('userSrv', function($q, $rootScope, crudSrv){
	var self = this;
	var apiPath = '/src/components/users/models/';

	this.getUsersList = function () {
		if (self.users) {
			$rootScope.$broadcast('userListLoaded', self.users);
		} else {
			crudSrv.get(apiPath + 'users.json').then(function(response) {
				self.users = response.data;
				$rootScope.$broadcast('userListLoaded', response.data);
			});
		}
	};

	this.save = function(user) {
		var exists = userExists(user);
		if (!exists) {
			self.users.push(user);
		} else {
			self.users[exists] = user;
		}
	};

	function userExists(user) {
		for (var person in self.users) {
			if (self.users[person].name == user.name) {
				return person;
			}
		}
		return false;
	}
});