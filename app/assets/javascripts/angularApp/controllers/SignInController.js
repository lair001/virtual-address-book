(function() {

	"use strict";

	angular
		.module('app')
		.controller('SignInController', ['$rootScope', '$scope', '$http', '$state', function SignInController($rootScope, $scope, $http, $state) {

			var signIn = this;

			// begin partial config
			$scope.controller = signIn;
			signIn.locals = {
				submitButtonLabel: "Sign In",
				onlyUsernameAndPasswordFields: true
			};
			// end partial config

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