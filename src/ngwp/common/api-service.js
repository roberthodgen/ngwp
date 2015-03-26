(function() {

	var app = angular.module('ngwp.apiService', ['ngwp.apiEndpoint']);

	app.service('apiService', ['$http', 'API_ENDPOINT', function($http, API_ENDPOINT) {

		this.fetchBlog = function() {
			return $http({
				method: 'GET',
				url: API_ENDPOINT
			}).then(function(response) {
				// HTTP 200-299 Status
				if (angular.isObject(response.data) && response.status === 200) {
					// Success
					console.log('[apiService] fetchBlog(): Fetch success.');
					return response.data;
				} else {
					// Error
					console.log('[apiService] fetchBlog(): Error reading response.');
					return {
						error: true
					};
				}
			}, function(response) {
				// Error
				console.log('[apiService] fetchBlog(): Request error: '+response.status);
				return {
					error: true,
					status: response.status
				};
			});
		};

		this.fetchPosts = function() {
			return $http({
				method: 'GET',
				url: API_ENDPOINT + 'posts'
			}).then(function(response) {
				// HTTP 200-299 Status
				if (angular.isArray(response.data) && response.status === 200) {
					// Success
					console.log('[apiService] fetchPosts(): Fetch success.');
					return response.data;
				} else {
					// Error
					console.log('[apiService] fetchPosts(): Error reading response.');
					return {
						error: true
					};
				}
			}, function(response) {
				// Error
				console.log('[apiService] fetchPosts(): Request error: '+response.status);
				return {
					error: true,
					status: response.status
				};
			});
		};

	}]);

})();