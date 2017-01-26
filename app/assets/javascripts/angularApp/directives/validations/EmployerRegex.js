(function() {

	angular
		.module('app')
		.directive('employerRegex', [function EmployerRegex() {

			return {

				restrict: 'A',
				require: 'ngModel',
				link: function(scope, element, attrs, ngModel) {

					ngModel.$validators.employerRegex = function(value) {
						return /^[\w .]{0,50}$/i.test(value);
					};

				}

			};

		}]);

})();