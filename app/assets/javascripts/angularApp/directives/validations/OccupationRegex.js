(function() {

	angular
		.module('app')
		.directive('occupationRegex', [function OccupationRegex() {

			return {

				restrict: 'A',
				require: 'ngModel',
				link: function(scope, element, attrs, ngModel) {

					ngModel.$validators.occupationRegex = function(value) {
						return /^[\w .]{0,25}$/i.test(value);
					};

				}

			};

		}]);

})();