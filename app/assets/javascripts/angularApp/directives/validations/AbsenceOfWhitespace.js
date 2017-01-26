(function() {

	angular
		.module('app')
		.directive('absenceOfWhitespace', [function AbsenceOfWhitespace() {

			return {

				restrict: 'A',
				require: 'ngModel',
				link: function(scope, element, attrs, ngModel) {

					ngModel.$validators.absenceOfWhitespace = function(value) {
						return /^([^\t\f\v\n\r \u00A0…\u2003]+|)$/i.test(value);
					};

				}

			};

		}]);

})();