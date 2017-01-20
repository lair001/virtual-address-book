(function() {

    angular
        .module('app')
        .directive("notEqualTo", [function notEqualTo() {

            return {

                restrict: 'A',
                require: "ngModel",
                scope: {
                    otherModelValueObject: "=notEqualTo"
                },
                link: function(scope, element, attributes, ngModel) {

                    ngModel.$validators.notEqualTo = function(modelValue) {
                        return modelValue !== scope.otherModelValueObject.$modelValue;
                    };

                    scope.$watch("otherModelValue", function() {
                        ngModel.$validate();
                    });
                }
            };

        }]);

})();