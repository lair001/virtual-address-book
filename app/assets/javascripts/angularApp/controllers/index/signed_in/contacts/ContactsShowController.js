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
					contactsShow.contact = Object.assign({}, parentContacts[i]);
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

			contactsShow.submitEdit = function contactsShowSubmitEdit($event) {
				$event.preventDefault();
				$http({
					method: "PATCH",
					data: { contact: contactsShow.contact},
					url: "/contacts/" + contactsShow.contact.id
				}).then(function onSuccessfulContactsShowEdit(response) {
					// signIn.errorTitle = undefined;
					// signIn.user = Object.assign({}, signIn.newUser);;
					parentContacts.splice(contactsShow.contactsIndex, 1, response.data);
					contactsShow.errorTitle = undefined;
					contactsShow.errorsDetail = undefined;
					$state.go('index.signed_in.contacts.show', { id: response.data.id });
				}, function onFailedContactsShowEdit(response) {
					contactsShow.errorTitle = response.data.errors[0].title;
					contactsShow.errorsDetail = response.data.errors[0].detail;
				});
			};

			// begin partial config
			$scope.controller = contactsShow;
			contactsShow.locals = {
				submitButtonLabel: "Edit Contact",
				submitMethod: contactsShow.submitEdit
			};
			// end partial config

		}]);

})();