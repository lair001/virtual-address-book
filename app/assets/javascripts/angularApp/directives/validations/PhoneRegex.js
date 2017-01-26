(function() {

	angular
		.module('app')
		.directive('phoneRegex', [function PhoneRegex() {

			return {

				restrict: 'A',
				require: 'ngModel',
				link: function(scope, element, attrs, ngModel) {

					ngModel.$validators.phoneRegex = function(value) {
						return /^(.*\d{3}.*\d{3}.*\d{4}|)$/i.test(value);
					};

				}

			};

		}]);

})();