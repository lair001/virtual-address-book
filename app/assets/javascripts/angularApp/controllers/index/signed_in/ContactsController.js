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

		}]);

})();