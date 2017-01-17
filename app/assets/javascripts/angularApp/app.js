(function() {

	"use strict";

	angular
		.module('app', ['ui.router', 'templates'])
		.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
			$stateProvider
				.state('index', {
					url: '/',
					templateUrl: 'index.html'
				})
				.state('index.visitor', {
					url: 'visitor',
					templateUrl: 'index/visitor.html'
				})
				.state('index.visitor.sign_in', {
					url: '/sign_in',
					templateUrl: 'index/visitor/sign_in.html'
				})
				.state('index.visitor.sign_up', {
					url: '/sign_up',
					templateUrl: 'index/visitor/sign_up.html'
				})
				.state('index.visitor.welcome', {
					url: '/welcome',
					templateUrl: 'index/visitor/welcome.html'
				})
				.state('index.signed_in', {
					url: 'signed_in',
					templateUrl: 'index/signed_in.html'
				})
				.state('index.signed_in.contacts', {
					url: '/contacts',
					templateUrl: 'index/signed_in/contacts.html'
				})
				.state('index.signed_in.contacts.new', {
					url: '/new',
					templateUrl: 'index/signed_in/contacts/new.html'
				})
				.state('index.signed_in.contacts.show', {
					url: '/:id',
					templateUrl: 'index/signed_in/contacts/show.html'
				})
				.state('index.signed_in.contacts.show.edit', {
					url: '/edit',
					templateUrl: 'index/signed_in/contacts/show/edit.html'
				});

				$urlRouterProvider
					.when("/", "/visitor/welcome")
					.when("/visitor", "/visitor/welcome")
					.when("/signed_in", "/visitor/welcome")
					.otherwise("/visitor/welcome");

		}]);

})();