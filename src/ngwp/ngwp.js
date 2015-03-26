(function() {

	var app = angular.module('ngwp', [
		'ngSanitize',
		'ui.router',		// Angular UI Router via https://github.com/angular-ui/ui-router
		'ngwp.rootCtrl',
		'ngwp.blogCtrl',
		'ngwp.pageCtrl',
		'ngwp.apiService',
		'ngwp.posts'	// ngwpPosts directive
	]);

	app.config(['$stateProvider', function($stateProvider) {

		$stateProvider.state('main', {
			url: '/',
			templateUrl: '/ngwp/templates/main.html',
			controller: 'blogCtrl',
			resolve: {
				blog: ['apiService', function(apiService) {
					return apiService.fetchBlog();
				}]
			}
		});

		$stateProvider.state('main.pages', {
			url: '^/pages/:pageId',
			templateUrl: '/ngwp/templates/page.html',
			controller: 'pageCtrl',
			resolve: {
				page: ['$stateParams', 'apiService', function($stateParams, apiService) {
					return apiService.fetchPage($stateParams.pageId);
				}]
			}
		});

		$stateProvider.state('api-test', {
			url: '/api-test',
			templateUrl: '/ngwp/templates/main.html',
			controller: 'blogCtrl',
			resolve: {
				blog: ['apiService', function(apiService) {
					return apiService.fetchBlog();
				}]
			}
		});

		$stateProvider.state('test', {
			url: '/test',
			templateUrl: '/ngwp/templates/main.html',
			controller: 'blogCtrl'
		});

	}]);

	// Enable HTML5-mode for $locationProvider
	app.config(['$locationProvider', function($locationProvider) {
		$locationProvider.html5Mode(true);
	}]);

})();