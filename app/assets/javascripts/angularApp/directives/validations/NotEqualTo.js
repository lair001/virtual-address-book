(function() {

    angular
        .module('app')
        .directive("notEqualTo", [function NotEqualTo() {

            return {

                restrict: 'A',
                require: "ngModel",
                scope: {
                    otherModelValueObject: "=notEqualTo"
                },
                link: function(scope, element, attributes, ngModel) {

                    if (scope.otherModelValueObject) {

                        ngModel.$validators.notEqualTo = function(modelValue) {
                            return modelValue !== scope.otherModelValueObject.$modelValue;
                        };

                        scope.$watch("otherModelValue", function() {
                            ngModel.$validate();
                        });

                    }

                }
            };

        }]);

})();