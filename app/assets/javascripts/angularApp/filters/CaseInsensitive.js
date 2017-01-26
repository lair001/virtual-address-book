function CaseInsensitive() {
	return function(inputCollection, inputElementProperty, query) {

		if (query === '' || query === undefined) {

			return inputCollection;

		} else {

			var lowerCaseQuery = query.toLowerCase();

			return inputCollection.filter(function(inputElement) {
				return inputElement[inputElementProperty].toLowerCase() === lowerCaseQuery;
			});

		}
	};
}

angular
	.module('app')
	.filter('caseInsensitive', CaseInsensitive);