'use strict';

// Setting up route
angular.module('core').config(['$stateProvider', '$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {
		// Redirect to home view when route not found
		$urlRouterProvider.otherwise('/');

		// Home state routing
		$stateProvider.
		state('home', {
			url: '/',
			templateUrl: 'modules/articles/views/list-articles.client.view.html'
		});

		$stateProvider.
		state('about', {
			url: '/about',
			templateUrl: 'modules/core/views/about.client.view.html'
		});

		$stateProvider.
		state('24hour', {
			url: '/24hour',
			templateUrl: 'modules/core/views/24hour.client.view.html'
		});

	}
]);
