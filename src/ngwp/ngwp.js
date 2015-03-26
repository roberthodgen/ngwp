(function() {

	var app = angular.module('ngwp', [
		'ngSanitize',
		'ui.router',		// Angular UI Router via https://github.com/angular-ui/ui-router
		'ngwp.rootCtrl',
		'ngwp.blogCtrl',
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