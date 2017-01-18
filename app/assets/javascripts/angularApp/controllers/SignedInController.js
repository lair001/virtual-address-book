(function() {

	"use strict";

	angular
		.module('app')
		.controller('SignedInController', ['$rootScope', '$http', '$state', function SignedInController($rootScope, $http, $state) {
			var signedIn = this;

			signedIn.signOut = function singedInSignOut($event) {
				$event.preventDefault();
				$http({
					method: "DELETE",
					url: '/sessions/' + $rootScope.currentUser.id
				}).then(function onSuccessfulSignOut(response) {
					$rootScope.currentUser = undefined;
					$state.go('index.visitor.welcome');
				}, function onFailedSignOut(response) {
					console.log(response);
				});
			}

		}]);

})();