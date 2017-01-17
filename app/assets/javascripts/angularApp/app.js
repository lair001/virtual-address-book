angular
	.module('app', ['ui.router', 'templates'])
	.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state('index', {
				url: '',
				templateUrl: 'index.html'
			})
			.state('index.visitor', {
				url: '/',
				templateUrl: 'index/visitor.html',
			})
			.state('index.visitor.welcome', {
				url: 'welcome',
				templateUrl: 'index/visitor/welcome.html'
			});

			$urlRouterProvider
				.when("", "/welcome")
				.when("/", "/welcome")
				.otherwise("/welcome");

	}]);