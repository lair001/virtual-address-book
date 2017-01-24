(function() {

	"use strict";

	angular
		.module('app')
		.controller('ContactsController', ['$rootScope', '$http', '$state', function ContactsController($rootScope, $http, $state) {

			var contacts = this;

			contacts.contacts = $rootScope.currentUser.contacts;

		}]);

})();