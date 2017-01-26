(function() {

	angular
		.module('app')
		.directive('stateRegex', [function StateRegex() {

			return {

				restrict: 'A',
				require: 'ngModel',
				link: function(scope, element, attrs, ngModel) {

					ngModel.$validators.stateRegex = function(value) {
						return /^([A-Za-z]{2}|)$/i.test(value);
					};

				}

			};

		}]);

})();