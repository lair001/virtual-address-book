(function() {

	angular
		.module('app')
		.directive('contactNameRegex', [function ContactNameRegex() {

			return {

				restrict: 'A',
				require: 'ngModel',
				link: function(scope, element, attrs, ngModel) {

					ngModel.$validators.contactNameRegex = function(value) {
						return /^[\w'’]{1,25}$/i.test(value);
					};

				}

			};

		}]);

})();