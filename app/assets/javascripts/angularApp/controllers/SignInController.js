(function() {

	"use strict";

	angular
		.module('app')
		.controller('SignInController', ['$rootScope', '$http', '$state', '$cookies', function SignInController($rootScope, $http, $state, $cookies) {

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
					console.log($cookies.getAll());
					$state.go('index.signed_in.contacts');
				}, function onFailedSignIn(response) {
					signIn.errorTitle = response.data.errors[0].title;
				});
			};

		}]);

})();