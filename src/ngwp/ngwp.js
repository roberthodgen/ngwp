(function() {

	var app = angular.module('ngwp', [
		'ui.router',		// Angular UI Router via https://github.com/angular-ui/ui-router
		'ngwp.rootCtrl',
		'ngwp.blogCtrl',
		'ngwp.apiService'
	]);

	app.config(['$stateProvider', function($stateProvider) {

		$stateProvider.state('main', {
			url: '/',
			templateUrl: '/ngwp/templates/main.html',
			controller: 'blogCtrl',
			resolve: {
				blog: ['apiService', function(apiService) {
					return apiService.fetchBlog().then(function(response) {
						if (!response.error) {
							return response;
						} else {
							alert('Could not load blog.');
							return null;
						}
					});
				}]
			}
		});

		$stateProvider.state('test', {
			url: '/test',
			templateUrl: '/ngwp/templates/main.html'
		});

	}]);

	// Enable HTML5-mode for $locationProvider
	app.config(['$locationProvider', function($locationProvider) {
		$locationProvider.html5Mode(true);
	}]);

})();