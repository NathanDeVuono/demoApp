'use strict';

users.service('usersSrv', function($q, $rootScope, crudSrv){
	var self = this;
	var apiPath = '/src/components/users/models/';

	function getUsersList() {
		 return crudSrv.get(apiPath + 'users.json').then(function(response) {
			self.usersList = response.data;
			return response.data;
		});
	}

	function userExists(user) {
		for (var person in self.usersList) {
			if (self.usersList[person].name == user.name) {
				return person;
			}
		}
		return false;
	}

	this.users = function() {
		if (self.usersList) {
			return $q(function(resolve, reject) {
				resolve(self.usersList);
			});
		} else {
			return getUsersList();
		}
	};

	this.save = function(user) {
		var exists = userExists(user);
		if (!exists) {
			self.usersList.push(user);
		} else {
			self.usersList[exists] = user;
		}
	};
});