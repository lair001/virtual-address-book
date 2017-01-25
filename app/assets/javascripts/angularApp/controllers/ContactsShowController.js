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

		}]);

})();