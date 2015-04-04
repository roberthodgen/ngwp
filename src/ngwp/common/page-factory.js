(function() {

	var app = angular.module('ngwp.pageFactory', []);

	app.factory('pageFactory', ['$http', 'API_ENDPOINT', '$route', function($http, API_ENDPOINT, $route) {
		return {
			forRoute: function(route) {

				console.log('route.url: '+route.url);
				var matches = route.url.match(/(\/):(\w+)([\?\*])?/g);
				
				var endpointUri = route.endpoint;
				if (matches) {
					// For each match of <abc>...
					for (var m = matches.length - 1; m >= 0; m--) {
						// Replace this with the value found in the route.params
						console.log('match: '+matches[m]);
						console.log($route[matches[m]]);
						console.log($route.current.params);
						endpointUri = endpointUri.replace('<' + matches[m] + '>', $route[matches[m]]);
					}
				}

				console.log('endpointUri: '+endpointUri);


				// ######
				return $http({
					method: 'GET',
					url: API_ENDPOINT + endpointUri,
					params: {}
				}).then(function(response) {
					// HTTP 200-299 Status
					if ((angular.isArray(response.data) || angular.isObject(response.data)) && response.status === 200) {
						console.log('[pageFactory] forRoute(): Fetch success.');
						// Success
						return response.data;
					} else {
						// Error
						console.log('[pageFactory] forRoute(): Error reading response.');
						return {
							error: true
						};
					}
				}, function(response) {
					// Error
					console.log('[pageFactory] forRoute(): Request error: '+response.status);
					return {
						error: true,
						status: response.status
					};
				});
			}, forEndpoint: function(endpointUri) {
				console.log('[pageFactory] forEndpoint(): Called with `endpointUri`: '+endpointUri);
				return $http({
					method: 'GET',
					url: API_ENDPOINT + endpointUri,
					params: {}
				}).then(function(response) {
					// HTTP 200-299 Status
					if ((angular.isArray(response.data) || angular.isObject(response.data)) && response.status === 200) {
						console.log('[pageFactory] forEndpoint(): Fetch success.');
						// Success
						return response.data;
					} else {
						// Error
						console.log('[pageFactory] forEndpoint(): Error reading response.');
						return {
							error: true
						};
					}
				}, function(response) {
					// Error
					console.log('[pageFactory] forEndpoint(): Request error: '+response.status);
					return {
						error: true,
						status: response.status
					};
				});
			}
		};
	}]);

})();