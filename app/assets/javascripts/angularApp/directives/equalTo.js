(function() {

    function equalTo() {
        return {

            restrict: 'A',
            require: "ngModel",
            scope: {
                otherModelValueObject: "=equalTo"
            },
            link: function(scope, element, attributes, ngModel) {

                ngModel.$validators.equalTo = function(modelValue) {
                    return modelValue == scope.otherModelValueObject.$modelValue;
                };

                scope.$watch("otherModelValue", function() {
                    ngModel.$validate();
                });
            }
        };
    };

    angular
        .module('app')
        .directive("equalTo", equalTo);

})();