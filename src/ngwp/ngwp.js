(function() {

	var app = angular.module('ngwp', [
		'ngSanitize',
		'ngResource',
		'ui.router',		// Angular UI Router via https://github.com/angular-ui/ui-router
		'ct.ui.router.extras.core',	// Angular UI Router Extras via https://github.com/christopherthielen/ui-router-extras; adds future states
		'ct.ui.router.extras.future',	// Angular UI Router Extras via https://github.com/christopherthielen/ui-router-extras; adds future states
		'ngwp.resources',
		'ngwp.stateFactory',
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


	app.config(['$urlMatcherFactoryProvider', function($urlMatcherFactoryProvider) {
		$urlMatcherFactoryProvider.caseInsensitive(true);
		$urlMatcherFactoryProvider.strictMode(false);
	}]);


	app.config(['$futureStateProvider', function($futureStateProvider) {
		// Loading states from .json file during runtime
		var loadAndRegisterFutureStates = function ($http, $q) {
			var deferred = $q.defer();
			var http_request = $http({
				method: 'GET',
				url: '/routeRules.json',
				params: {}
			}).then(function(response) {
				// HTTP 200-299 Status
				if (angular.isArray(response.data) && response.status === 200) {
					console.log('[apiService] fetchRouteRules(): Fetch success.');
					// Success

					angular.forEach(response.data, function(routeRule) {

						if (angular.isString(routeRule.url)) {
							$futureStateProvider.futureState({
								url: routeRule.url,
								name: routeRule.name,
								type: 'state',
								template: routeRule.template
							});
						}
					});
					deferred.resolve(true);
				} else {
					// Error
					console.log('[apiService] fetchRouteRules(): Error reading response.');
					deferred.reject();
				}
			}, function(response) {
				// Error
				console.log('[apiService] fetchRouteRules(): Request error: '+response.status);
				deferred.reject();
			});

			return deferred.promise;
		};

		// Register `default` type with the `stateFactory`
		$futureStateProvider.stateFactory('state', ['stateFactory', 'futureState', function(stateFactory, futureState) {
			return stateFactory(futureState);
		}]);

		$futureStateProvider.addResolve(loadAndRegisterFutureStates);
	}]);


	app.config(['$stateProvider', function($stateProvider) {
		$stateProvider.state({
			name: 'test',
			url: '/test',
			templateProvider: function($http) {
				return $http({
					method: 'GET',
					url: '/ngwp/templates/single.html'
				}).then(function(response) {
					console.log('hello');
					return response.data;
				});
			}
		});
	}]);


	// Enable HTML5-mode for $locationProvider
	app.config(['$locationProvider', function($locationProvider) {
		$locationProvider.html5Mode(true);
	}]);

})();