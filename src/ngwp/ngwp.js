(function() {

	var app = angular.module('ngwp', [
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
				blog: ['$q', function($q) {
					var defer = $q.defer();

					var blog = {
						name: "Robert's blog"
					};
					defer.resolve(blog);

					return defer.promise;
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