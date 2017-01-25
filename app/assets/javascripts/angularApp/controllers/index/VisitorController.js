(function() {

	"use strict";

	angular
		.module('app')
		.controller('VisitorController', ['$rootScope', '$http', '$state', function VisitorController($rootScope, $state) {

			if ($rootScope.currentUser) {
				$state.go('index.signed_in.contacts');
			}

		}]);

})();