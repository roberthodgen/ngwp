(function() {

	var app = angular.module('ngwp.stateFactory', []);

	app.factory('stateFactory', ['$q', '$http', function($q, $http) {
		return function(futureState) {
			var deferred = $q.defer();

			// console.log(futureState.template);
			console.log('stateFactory manufacturing state with name: '+futureState.name);
			// console.log(futureState.url);

			var fullState = {
				name: futureState.name,
				url: futureState.url,
				templateProvider: function($q, templateFactory) {
					console.log('templateProvider called, attempt to use template: '+futureState.template);

					var templateDeferred = $q.defer();

					templateFactory(futureState.template).then(function(response) {
						// HTTP 200-299 Status
						templateDeferred.resolve(response.data);
					}, function(response) {
						// Error

						// Try loading the gemeric...
						templateFactory('archive').then(function(response) {
							// HTTP 200-299 Status
							templateDeferred.resolve(response.data);
						}, function(response) {
							// Error
							templateDeferred.resolve('<h1>Template not found.</h1>');
						});
					});

					return templateDeferred.promise;
					// return templateFactory(futureState.template);
				}, controllerProvider: function(controllerForTemplateFactory) {
					return controllerForTemplateFactory(futureState.template);
				}, resolve: {
					posts: ['apiService', function(apiService) {
						return apiService.fetchPosts();
					}]
				}
			};

			// Resolve the full state;
			// can be done asynchronously
			deferred.resolve(fullState);

			return deferred.promise;
		};
	}]);


	app.constant('TEMPLATE_DIRECTORY', '/ngwp/templates/');


	app.factory('templateFactory', ['$http', '$templateCache', 'TEMPLATE_DIRECTORY', function($http, $templateCache, TEMPLATE_DIRECTORY) {
		return function(template) {

			// return TEMPLATE_DIRECTORY + template + '.html';

			// Attempt loading the FULL template
			var cached_template = $templateCache.get(TEMPLATE_DIRECTORY + template + '.html');

			if (!!cached_template) {
				return cached_template;
			}

			return $http({
				method: 'GET',
				url: TEMPLATE_DIRECTORY + template + '.html',
				cache: $templateCache
			});
		};
	}]);


	app.factory('controllerForTemplateFactory', function() {
		return function(string) {
			if (string.lastIndexOf('single', 0) === 0) {
				return 'singleCtrl';
			} else if (string.lastIndexOf('archive', 0) === 0) {
				return 'archiveCtrl';
			}
		};
	});

})();