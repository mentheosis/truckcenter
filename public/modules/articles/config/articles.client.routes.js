'use strict';

// Setting up route
angular.module('articles').config(['$stateProvider',
	function($stateProvider) {
		// Articles state routing
		$stateProvider.
		state('listArticles', {
			url: '/articles',
			templateUrl: 'modules/articles/views/list-articles.client.view.html'
		}).
		state('cars', {
			url: '/cars',
			templateUrl: 'modules/articles/views/list-articles.client.view.html'
		}).
		state('trucks', {
			url: '/trucks',
			templateUrl: 'modules/articles/views/list-articles.client.view.html'
		}).
		state('specials', {
			url: '/specials',
			templateUrl: 'modules/articles/views/list-articles.client.view.html'
		}).
		state('msgboard', {
			url: '/msgboard',
			templateUrl: 'modules/articles/views/msgboard.client.view.html'
		}).
		state('createArticle', {
			url: '/articles/create',
			templateUrl: 'modules/articles/views/list-articles.client.view.html'
		}).
		state('viewArticle', {
			url: '/articles/:articleId',
			templateUrl: 'modules/articles/views/view-article.client.view.html'
		}).
		state('editArticle', {
			url: '/articles/:articleId/edit',
			templateUrl: 'modules/articles/views/edit-article.client.view.html'
		});
	}
]);
