(function() {

	"use strict";

	angular
		.module('app')
		.controller('AccountsShowDeleteController', ['$rootScope', '$scope', '$http', '$state', function AccountsShowDeleteController($rootScope, $scope, $http, $state) {

			var accountsShowDelete = this;

			accountsShowDelete.user = $scope.accountsShow.user;

			accountsShowDelete.submit = function accountsShowDeleteSubmit($event) {
				$event.preventDefault();
				if (confirm("Really delete your account?")) {
					$http({
						method: "DELETE",
						params: { current_password: accountsShowDelete.user.current_password },
						url: "/users/" + accountsShowDelete.user.id
					}).then(function onSuccessfulAccountsShowDelete(response) {
						// signIn.errorTitle = undefined;
						// signIn.user = Object.assign({}, signIn.newUser);;
						$rootScope.currentUser = undefined
						$state.go('index.visitor.welcome');
					}, function onFailedAccountsShowDelete(response) {
						$scope.accountsShow.errorTitle = response.data.errors[0].title;
						$scope.accountsShow.errorsDetail = response.data.errors[0].detail;
					});
				}
			};

			// begin partial config
			$scope.controller = accountsShowDelete;
			accountsShowDelete.locals = {
				submitButtonLabel: "Delete Account",
				onlyCurrentPasswordField: true
			};
			// end partial config

		}]);

})();