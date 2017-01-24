(function() {

	"use strict";

	angular
		.module('app')
		.controller('AccountsShowController', ['$rootScope', function AccountsShowController($rootScope) {

			var accountsShow = this;

			accountsShow.newUser = {
				id: $rootScope.currentUser.id,
				username: $rootScope.currentUser.username,
				email: $rootScope.currentUser.email
			};

			accountsShow.user = Object.assign({}, accountsShow.newUser);

		}]);

})();