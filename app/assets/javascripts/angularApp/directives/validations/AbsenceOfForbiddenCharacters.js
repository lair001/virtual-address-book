(function() {

	angular
		.module('app')
		.directive('absenceOfForbiddenCharacters', [function AbsenceOfForbiddenCharacters() {

			return {

				restrict: 'A',
				require: 'ngModel',
				link: function(scope, element, attrs, ngModel) {

					ngModel.$validators.absenceOfForbiddenCharacters = function(value) {
						return /^([\s!-ϿԱ-֏ἀ-῾\u2003₠-₾]+|)$/i.test(value);
					};

				}

			};

		}]);

})();