(function() {

	"use strict";

	angular
		.module('app')
		.controller('SignInController', ['$rootScope', '$http', '$state', function SignInController($rootScope, $http, $state) {

			if ($rootScope.currentUser) {
				$state.go('index.signed_in.contacts');
			}

			var signIn = this;

			signIn.newUser = {
				username: "",
				password: ""
			};

			signIn.user = Object.assign({}, signIn.newUser);

			signIn.submit = function signInSubmit($event) {
				$event.preventDefault();
				$http({
					method: "POST",
					data: signIn.user,
					url: "/sessions"
				}).then(function onSuccessfulSignIn(response) {
					// signIn.errorTitle = undefined;
					// signIn.user = Object.assign({}, signIn.newUser);;
					$rootScope.currentUser = response.data;
					$state.go('index.signed_in.contacts');
				}, function onFailedSignIn(response) {
					signIn.errorTitle = response.data.errors[0].title;
				});
			};

		}]);

})();