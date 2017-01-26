function CaseInsensitive() {
	return function(inputCollection, inputElementProperty, query) {

		if (query === '' || query === undefined) {

			return inputCollection;

		} else {

			var queryRegex = new RegExp("^" + query, "i");

			return inputCollection.filter(function(inputElement) {
				return inputElement[inputElementProperty].match(queryRegex);
			});

		}
	};
}

angular
	.module('app')
	.filter('caseInsensitive', CaseInsensitive);