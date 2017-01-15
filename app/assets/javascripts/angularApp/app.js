angular
	.module('app', ['ui.router', 'templates'])
	.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state('visitor', {
				url: '/',
				templateUrl: 'visitor.html',
			})
			.state('visitor.welcome', {
				url: 'welcome',
				templateUrl: 'visitor/welcome.html'
			});

			$urlRouterProvider
				.when("/", "/welcome")
				.otherwise("/welcome");

	}]);