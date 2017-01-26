(function() {

	"use strict";

	angular
		.module('app')
		.controller('ContactsController', ['$rootScope', '$http', '$state', function ContactsController($rootScope, $http, $state) {

			var contacts = this;

			contacts.contacts = $rootScope.currentUser.contacts;

			contacts.newContact = {
				user_id: $rootScope.currentUser.id,
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
					$state.go('index.signed_in.contacts.show', { id: response.data.id });
				}, function onFailedContactsSubmit(response) {
					contacts.errorsDetail = response.data.errors[0].detail;
				});
			};

		}]);

})();