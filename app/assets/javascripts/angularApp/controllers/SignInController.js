(function() {

	"use strict";

	angular
		.module('app')
		.controller('SignInController', ['$rootScope', '$http', '$state', function SignInController($rootScope, $http, $state) {
			var signIn = this;

			signIn.newUser = {
				username: "",
				password: ""
			};

			signIn.user = Object.assign({}, signIn.newUser)

			signIn.submit = function signInSubmit($event) {
				$event.preventDefault();
				console.log("form submitted");
				$http({
					method: "POST",
					data: signIn.user,
					url: "/sessions"
				}).then(function onSuccessfulSignIn(response) {
					signIn.errorTitle = undefined;
					signIn.user = Object.assign({}, signIn.newUser)
					$rootScope.currentUser = response.data;
					$state.go('index.signed_in.contacts');
				}, function onFailedSignIn(response) {
					console.log('in failure callback');
					console.log(response);
					console.log(response.data);
					console.log(response.data.errors);
				});
			};

		}]);

})();