(function() {

	"use strict";

	angular
		.module('app')
		.controller('ContactsController', ['$rootScope', '$scope', '$http', '$state', function ContactsController($rootScope, $scope, $http, $state) {

			var contacts = this;

			contacts.contacts = $rootScope.currentUser.contacts;

			contacts.newContact = {
				last_name: "",
				first_name: "",
				occupation: "",
				employer: "",
				email: "",
				phone: "",
				address_line_1: "",
				address_line_2: "",
				city: "",
				state: "",
				zip_code: ""
			};

			contacts.contact = Object.assign({}, contacts.newContact);

			contacts.submit = function contactsSubmit($event) {
				$event.preventDefault();
				$http({
					method: "POST",
					data: { contact: contacts.contact },
					url: "/contacts"
				}).then(function onSuccessfulContactsSubmit(response) {
					contacts.contacts.push(response.data);
					contacts.contact = Object.assign({}, contacts.newContact);
					contacts.errorTitle = undefined;
					contacts.errorsDetail = undefined;
					$state.go('index.signed_in.contacts.show', { id: response.data.id });
				}, function onFailedContactsSubmit(response) {
					contacts.errorTitle = response.data.errors[0].title;
					contacts.errorsDetail = response.data.errors[0].detail;
				});
			};

			// begin partial config
			$scope.controller = contacts;
			contacts.locals = {
				submitButtonLabel: "Create Contact"
			};
			// end partial config

		}]);

})();