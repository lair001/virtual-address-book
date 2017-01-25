(function() {

	"use strict";

	angular
		.module('app', ['ui.router', 'templates', 'ngMessages'])
		.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
			$stateProvider
				.state('index', {
					url: '/',
					templateUrl: 'index.html'
				})
				.state('index.visitor', {
					url: 'visitor',
					templateUrl: 'index/visitor.html',
					controller: 'VisitorController as visitor'
				})
				.state('index.visitor.sign_in', {
					url: '/sign_in',
					templateUrl: 'index/visitor/sign_in.html',
					controller: 'SignInController as signIn'
				})
				.state('index.visitor.sign_up', {
					url: '/sign_up',
					templateUrl: 'index/visitor/sign_up.html',
					controller: 'SignUpController as signUp'
				})
				.state('index.visitor.welcome', {
					url: '/welcome',
					templateUrl: 'index/visitor/welcome.html'
				})
				.state('index.signed_in', {
					url: 'signed_in',
					templateUrl: 'index/signed_in.html',
					controller: 'SignedInController as signedIn'
				})
				.state('index.signed_in.accounts', {
					url: '/accounts',
					templateUrl: 'index/signed_in/accounts.html'
				})
				.state('index.signed_in.accounts.show', {
					url: '/:id',
					templateUrl: 'index/signed_in/accounts/show.html',
					controller: 'AccountsShowController as accountsShow'
				})
				.state('index.signed_in.accounts.show.edit', {
					url: '/edit',
					templateUrl: 'index/signed_in/accounts/show/edit.html'
				})
				.state('index.signed_in.accounts.show.delete', {
					url: '/delete',
					templateUrl: 'index/signed_in/accounts/show/delete.html',
					controller: 'AccountsShowDeleteController as accountsShowDelete'
				})
				.state('index.signed_in.contacts', {
					url: '/contacts',
					templateUrl: 'index/signed_in/contacts.html',
					controller: 'ContactsController as contacts'
				})
				.state('index.signed_in.contacts.new', {
					url: '/new',
					templateUrl: 'index/signed_in/contacts/new.html'
				})
				.state('index.signed_in.contacts.show', {
					url: '/:id',
					templateUrl: 'index/signed_in/contacts/show.html',
					controller: 'ContactsShowController as contactsShow'
				})
				.state('index.signed_in.contacts.show.edit', {
					url: '/edit',
					templateUrl: 'index/signed_in/contacts/show/edit.html'
				});

				$urlRouterProvider
					.when("/", "/visitor/welcome")
					.when("/visitor", "/visitor/welcome")
					.when("/signed_in", "/signed_in/contacts")
					.when("/signed_in/account", "/signed_in/account/edit")
					.otherwise("/visitor/welcome");

		}]);

})();