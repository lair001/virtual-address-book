(function() {

	angular
		.module('app')
		.directive('contactAddressLineRegex', [function ContactAddressLineRegex() {

			return {

				restrict: 'A',
				require: 'ngModel',
				link: function(scope, element, attrs, ngModel) {

					ngModel.$validators.contactAddressLineRegex = function(value) {
						return /^([\w .#]{,50}|)$/i.test(value);
					};

				}

			};

		}]);

})();