(function() {

	"use strict";

	angular
		.module('app')
		.controller('SignInController', ['$rootScope', '$http', function SignInController($rootScope, $http) {
			var signIn = this;

			signIn.user = {
				username: "",
				password: ""
			}

			signIn.submit = function signInSubmit($event) {
				$event.preventDefault();
				console.log("form submitted");
				$http({
					method: "POST",
					data: signIn.user,
					url: "/sessions"
				}).then(function onSuccessfulSignIn(response) {
					console.log(response)
				}, function onFailedSignIn(response) {
					console.log(response)
				});
			};

		}]);

})();