(function() {

	"use strict";

	angular
		.module('app')
		.controller('SignUpController', ['$rootScope', '$scope', '$http', '$state', function SignUpController($rootScope, $scope, $http, $state) {

			var signUp = this;

			// begin partial config
			$scope.controller = signUp;
			signUp.locals = {
				submitButtonLabel: "Sign Up",
				usernameValidation: true,
				passwordValidation: true
			};
			// end partial config

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
					data: { user: signUp.user },
					url: "/users"
				}).then(function onSuccessfulSignUp(response) {
					$rootScope.currentUser = response.data;
					$state.go('index.signed_in.contacts');
				}, function onFailedSignUp(response) {
					signUp.errorsDetail = response.data.errors[0].detail;
				});
			};

		}]);

})();