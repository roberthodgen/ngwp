(function() {

	var app = angular.module('ngwp', [
		'ngSanitize',
		'ngRoute',		// Angular UI Router via https://github.com/angular-ui/ui-router
		'ngwp.rootCtrl',
		'ngwp.blogCtrl',
		'ngwp.singleCtrl',
		'ngwp.archiveCtrl',
		'ngwp.apiService',
		'ngwp.posts',	// ngwpPosts directive
		'ngwp.footer',
		'ngwp.comments',
		'ngwp.categories',
		'ngwp.pageFactory'
	]);

	var controllerForTemplate = function(string) {
		if (string.lastIndexOf('single', 0) === 0) {
			return 'singleCtrl';
		} else if (string.lastIndexOf('archive', 0) === 0) {
			return 'archiveCtrl';
		}
	};

	var loadingRoutes = 0;


	app.config(['$routeProvider', function($routeProvider) {

		// 404 Error
		$routeProvider.when('/404', {
			templateUrl: '/ngwp/templates/404.html'
		});

		$routeProvider.when('/sample-page', {
			templateUrl: '/ngwp/templates/single.html',
			controller: 'singleCtrl',
			resolve: {
				post: ['pageFactory', function(pageFactory) {
					return pageFactory.forEndpoint('pages/sample-page');
				}]
			}
		});

		$routeProvider.otherwise({
			resolve: {
				dependencies: ['$q', '$location', '$http', '$route', 'apiService', 'pageFactory', function($q, $location, $http, $route, apiService, pageFactory) {
					console.log('resolve dependencies');
					var deferred = $q.defer();
					var path = $location.path();

					if (loadingRoutes < 2) {
						apiService.fetchRoutes().then(function(routes) {

							for (var i = routes.length - 1; i >= 0; i--) {
								
								var templateUrl = '/ngwp/templates/' + routes[i].template + '.html';
								console.log('templateUrl: '+templateUrl);
								var controller = controllerForTemplate(routes[i].template);
								console.log('controller: '+controller);
								$routeProvider.when(routes[i].url, {
									templateUrl: templateUrl,
									controller: controller,
									resolve: {
										post: pageFactory.forRoute(routes[i])
									}
								});
							}

							loadingRoutes++;
							console.log('$routeScope.$broadcast with $locationChangeSuccess');
							// $rootScope.$apply(function() {
								deferred.resolve();
							// });
							$route.reload();
							// $rootScope.$broadcast('$locationChangeSuccess', path, path);
						});
					}
					return deferred.promise;
				}]
			}, controller: function($scope) {
				console.log('$routeProvider.otherwise controller instantiated');
			}, template: '<div></div>'
		});

	}]);


	// Enable HTML5-mode for $locationProvider
	app.config(['$locationProvider', function($locationProvider) {
		$locationProvider.html5Mode(true);
	}]);

})();