(function() {

	"use strict";

	angular
		.module('app')
		.controller('ContactsShowController', ['$scope', '$http', '$state', '$stateParams', function ContactsShowController($scope, $http, $state, $stateParams) {

			var contactsShow = this,
				parentContacts = $scope.contacts.contacts,
				contactIdParam = parseInt($stateParams.id, 10);

			for (var i=0; i < parentContacts.length; i++) {
				if (contactIdParam === parentContacts[i].id) {
					contactsShow.contactsIndex = i;
					contactsShow.contact = parentContacts[i];
					i = parentContacts.length;
				}
			}

			contactsShow.deleteContact = function contactsShowDeleteContact($event) {
				$event.preventDefault();
				if (confirm("Really delete contact?")) {
					$http({
						method: "DELETE",
						url: "/contacts/" + contactsShow.contact.id
					}).then(function onSuccessfulContactsShowDelete(response) {
						// signIn.errorTitle = undefined;
						// signIn.user = Object.assign({}, signIn.newUser);;
						parentContacts.splice(contactsShow.contactsIndex, 1);
						$state.go("index.signed_in.contacts");
					}, function onFailedContactsShowDelete(response) {
						contactsShow.errorTitle = response.data.errors[0].title;
						contactsShow.errorsDetail = response.data.errors[0].detail;
					});
				}
			};

			// begin partial config
			$scope.controller = contactsShow;
			contacts.locals = {
				submitButtonLabel: "Edit Contact",
				submitMethod: contactsShow.submitEdit
			};
			// end partial config

		}]);

})();