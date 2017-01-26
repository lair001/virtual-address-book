(function() {

    angular
        .module('app')
        .directive("equalTo", [function EqualTo() {

            return {

                restrict: 'A',
                require: "ngModel",
                scope: {
                    otherModelValueObject: "=equalTo"
                },
                link: function(scope, element, attributes, ngModel) {

                    if (scope.otherModelValueObject) {

                        ngModel.$validators.equalTo = function(modelValue) {
                            return modelValue === scope.otherModelValueObject.$modelValue;
                        };

                        scope.$watch("otherModelValue", function() {
                            ngModel.$validate();
                        });

                    }

                }
            };

        }]);

})();