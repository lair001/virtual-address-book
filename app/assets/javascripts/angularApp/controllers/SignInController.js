(function() {

	"use strict";

	angular
		.module('app')
		.controller('SignInController', ['$rootScope', function SignInController($rootScope) {
			var signIn = this;

			signIn.user = {
				username: "",
				password: ""
			}
		}]);

})();