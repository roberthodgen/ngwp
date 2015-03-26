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

		this.fetchPage = function(pageSlug) {
			console.log('[apiService] fetchPage(): Called with `pageSlug`: '+pageSlug);
			return $http({
				method: 'GET',
				url: API_ENDPOINT + 'pages/' + pageSlug
			}).then(function(response) {
				// HTTP 200-299 Status
				if (angular.isObject(response.data) && response.status === 200) {
					// Success
					console.log('[apiService] fetchPage(): Fetch success.');
					return response.data;
				} else {
					// Error
					console.log('[apiService] fetchPage(): Error reading response.');
					return {
						error: true
					};
				}
			}, function(response) {
				// Error
				console.log('[apiService] fetchPage(): Request error: '+response.status);
				return {
					error: true,
					status: response.status
				};
			});
		};

		this.fetchPost = function(postId) {
			console.log('[apiService] fetchPost(): Called with `postId`: '+postId);
			return $http({
				method: 'GET',
				url: API_ENDPOINT + 'posts/' + postId
			}).then(function(response) {
				// HTTP 200-299 Status
				if (angular.isObject(response.data) && response.status === 200) {
					// Success
					console.log('[apiService] fetchPost(): Fetch success.');
					return response.data;
				} else {
					// Error
					console.log('[apiService] fetchPost(): Error reading response.');
					return {
						error: true
					};
				}
			}, function(response) {
				// Error
				console.log('[apiService] fetchPost(): Request error: '+response.status);
				return {
					error: true,
					status: response.status
				};
			});
		};

		// Not currently used
		this.fetchPostBySlug = function(postSlug) {
			console.log('[apiService] fetchPostBySlug(): Called with `postSlug`: '+postSlug);
			return $http({
				method: 'GET',
				url: API_ENDPOINT + 'posts',
				params: {
					'filter[name]': postSlug
				}
			}).then(function(response) {
				// HTTP 200-299 Status
				if (angular.isArray(response.data) && response.status === 200) {
					// Success
					if (response.data.length > 0) {
						console.log('[apiService] fetchPostBySlug(): Fetch success.');
						return response.data[0];
					} else {
						console.log('[apiService] fetchPostBySlug(): Response Array contained no elements.');
						return {
							error: true
						};
					}
				} else {
					// Error
					console.log('[apiService] fetchPostBySlug(): Error reading response.');
					return {
						error: true
					};
				}
			}, function(response) {
				// Error
				console.log('[apiService] fetchPostBySlug(): Request error: '+response.status);
				return {
					error: true,
					status: response.status
				};
			});
		};

		this.fetchCommentsByPostId = function(postId) {
			console.log('[apiService] fetchCommentsByPostId(): Called with `postId`: '+postId);
			return $http({
				method: 'GET',
				url: API_ENDPOINT + 'posts/' + postId + '/comments'
			}).then(function(response) {
				// HTTP 200-299 Status
				if (angular.isObject(response.data) && response.status === 200) {
					// Success
					console.log('[apiService] fetchCommentsByPostId(): Fetch success.');
					return response.data;
				} else {
					// Error
					console.log('[apiService] fetchCommentsByPostId(): Error reading response.');
					return {
						error: true
					};
				}
			}, function(response) {
				// Error
				console.log('[apiService] fetchCommentsByPostId(): Request error: '+response.status);
				return {
					error: true,
					status: response.status
				};
			});
		};

	}]);

})();