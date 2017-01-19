(function() {

	"use strict";

	angular
		.module('app')
		.controller('SignUpController', ['$rootScope', '$http', '$state', function SignUpController($rootScope, $http, $state) {

			var signUp = this;

			signUp.newUser = {
				username: "",
				email: "",
				password: "",
				password_confirmation: ""
			};

			signUp.user = Object.assign({}, signUp.newUser);

			signUp.submit = function signUpSubmit($event) {
				$event.preventDefault();
				$http({
					method: "POST",
					data: signUp.user,
					url: "/users"
				}).then(function onSuccessfulSignUp(response) {
					$rootScope.currentUser = response.data;
					$state.go('index.signed_in.contacts');
				}, function onFailedSignUp(response) {
					signIn.errorDetail = response.data.errors[0].detail.join('<br>');
				});
			};

		}]);

})();