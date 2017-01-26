(function() {

	angular
		.module('app')
		.directive('zipCodeRegex', [function ZipCodeRegex() {

			return {

				restrict: 'A',
				require: 'ngModel',
				link: function(scope, element, attrs, ngModel) {

					ngModel.$validators.zipCodeRegex = function(value) {
						return /^(\d{5}-\d{4}|\d{5}|)$/i.test(value);
					};

				}

			};

		}]);

})();