(function() {

	"use strict";

	angular
		.module('app')
		.controller('AccountsShowController', ['$rootScope', '$http', '$state', function AccountsShowController($rootScope, $http, $state) {

			var accountsShow = this;

			accountsShow.newUser = {
				id: $rootScope.currentUser.id,
				username: $rootScope.currentUser.username,
				email: $rootScope.currentUser.email,
				current_password: "",
				password: "",
				password_confirmation: ""
			};

			accountsShow.user = Object.assign({}, accountsShow.newUser);

			accountsShow.submitEdit = function accountsShowSubmitEdit($event) {
				$event.preventDefault();
				$http({
					method: "PATCH",
					data: { user: accountsShow.user},
					url: "/users/" + accountsShow.user.id
				}).then(function onSuccessfulAccountsShowEdit(response) {
					// signIn.errorTitle = undefined;
					// signIn.user = Object.assign({}, signIn.newUser);;
					$rootScope.currentUser.username = response.data.username;
					$rootScope.currentUser.email = response.data.email;
					$state.go('index.signed_in.accounts.show');
				}, function onFailedAccountsShowEdit(response) {
					accountsShow.errorTitle = response.data.errors[0].title;
					accountsShow.errorsDetail = response.data.errors[0].detail;
				});
			};

			accountsShow.submitDelete = function accountsShowSubmitDelete($event) {
				$event.preventDefault();
				if (confirm("Really delete your account?")) {
					$http({
						method: "DELETE",
						params: { current_password: accountsShow.user.current_password },
						url: "/users/" + accountsShow.user.id
					}).then(function onSuccessfulAccountsShowDelete(response) {
						// signIn.errorTitle = undefined;
						// signIn.user = Object.assign({}, signIn.newUser);;
						$rootScope.currentUser = undefined
						$state.go('index.visitor.welcome');
					}, function onFailedAccountsShowDelete(response) {
						accountsShow.errorTitle = response.data.errors[0].title;
						accountsShow.errorsDetail = response.data.errors[0].detail;
					});
				}
			};

		}]);

})();