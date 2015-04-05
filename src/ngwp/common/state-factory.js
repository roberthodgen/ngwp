(function() {

	var app = angular.module('ngwp.stateFactory', []);

	app.factory('stateFactory', ['$q', '$http', function($q, $http) {
		return function(futureState) {
			var deferred = $q.defer();

			// console.log(futureState.template);
			// console.log(futureState.name);
			// console.log(futureState.url);

			var fullState = {
				name: futureState.name,
				url: futureState.url,
				templateProvider: function($http) {
					console.log('templateProvider');
					var templateUrl = '/ngwp/templates/'+futureState.data+'.html';
					console.log(templateUrl);
					return $http({
						method: 'GET',
						url: templateUrl
					}).then(function(response) {
						console.log('Loaded Successfully!');
						return response.data;
					});
					// return templateFactory(futureState.template);
				}, controllerProvider: function(controllerForTemplateFactory) {
					return controllerForTemplateFactory(futureState.data);
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

			template = 'single';

			// return TEMPLATE_DIRECTORY + template + '.html';

			// Attempt loading the FULL template
			// var cached_template = $templateCache.get(TEMPLATE_DIRECTORY + template + '.html');

			// if (angular.isDefined(cached_template)) {
			// 	return cached_template;
			// }

			return $http({
				method: 'GET',
				url: TEMPLATE_DIRECTORY + template + '.html',
				cache: $templateCache
			}).then(function(response) {
				// HTTP 200-299 Status
				console.log('HTTP request finished with status: '+response.status);
				console.log(typeof response.data);
				return response.data;
			}, function(response) {
				// Error
				return 'Not Found';
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