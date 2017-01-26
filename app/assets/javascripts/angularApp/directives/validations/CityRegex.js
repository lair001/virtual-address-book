(function() {

	angular
		.module('app')
		.directive('cityRegex', [function CityRegex() {

			return {

				restrict: 'A',
				require: 'ngModel',
				link: function(scope, element, attrs, ngModel) {

					ngModel.$validators.cityRegex = function(value) {
						return /^[\w .]{,25}$/i.test(value);
					};

				}

			};

		}]);

})();