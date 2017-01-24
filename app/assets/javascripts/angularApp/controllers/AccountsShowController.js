(function() {

	"use strict";

	angular
		.module('app')
		.controller('AccountsShowController', ['$rootScope', function AccountsShowController($rootScope) {

			var accountsShow = this;

			accountsShow.newUser = {
				id = $rootScope.id,
				username = $rootScope.username,
				email = $rootScope.email
			};

			accountsShow.user = Object.assign({}, accountsShow.newUser);

		}]);

})();