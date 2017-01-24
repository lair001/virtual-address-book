(function() {

	angular
		.module('app')
		.directive('emailRegex', [function emailRegex() {

			return {

				restrict: 'A',
				require: 'ngModel',
				link: function(scope, element, attrs, ngModel) {

					ngModel.$validators.emailRegex = function(value) {
						return /^([^@]+@[^@]+\.[^.@\d]+|)$/i.test(value);
					};

				}

			};

		}]);

})();