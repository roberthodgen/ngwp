(function() {

	var app = angular.module('ngwp.apiService', ['ngwp.apiEndpoint']);

	app.service('apiService', ['$http', '$q', 'API_ENDPOINT', function($http, $q, API_ENDPOINT) {

		this.fetchBlog = function() {
			console.log('[apiService] fetchBlog(): Called.');
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
			console.log('[apiService] fetchPosts(): Called.');
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
					'filter[name]': postSlug,
					'filter[post_type]': 'post'
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
				url: API_ENDPOINT + 'wp/v2/comments',
				params: {
					post_id: postId
				}
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

		// Return all categories
		this.fetchCategories = function() {
			console.log('[apiService] fetchCategories(): Called.');
			return $http({
				method: 'GET',
				url: API_ENDPOINT + 'taxonomies/category/terms'
			}).then(function(response) {
				// HTTP 200-299 Status
				if (angular.isArray(response.data) && response.status === 200) {
					// Success
					console.log('[apiService] fetchCategories(): Fetch success.');
					return response.data;
				} else {
					// Error
					console.log('[apiService] fetchCategories(): Error reading response.');
					return {
						error: true
					};
				}
			}, function(response) {
				// Error
				console.log('[apiService] fetchCategories(): Request error: '+response.status);
				return {
					error: true,
					status: response.status
				};
			});
		};

		// Return posts by category
		this.fetchPostsByCategoryId = function(categoryId) {
			console.log('[apiService] fetchPostsByCategoryId(): Called with `categoryId`: '+categoryId);
			return $http({
				method: 'GET',
				url: API_ENDPOINT + 'posts',
				params: {
					'filter[cat]': categoryId
				}
			}).then(function(response) {
				// HTTP 200-299 Status
				if (angular.isArray(response.data) && response.status === 200) {
					console.log('[apiService] fetchPostsByCategoryId(): Fetch success.');
					// Success
					return response.data;
				} else {
					// Error
					console.log('[apiService] fetchPostsByCategoryId(): Error reading response.');
					return {
						error: true
					};
				}
			}, function(response) {
				// Error
				console.log('[apiService] fetchPostsByCategoryId(): Request error: '+response.status);
				return {
					error: true,
					status: response.status
				};
			});
		};

		// Test for Routes
		this.fetchRoutes = function() {
			var deferred = $q.defer();

			deferred.resolve([
				{
					url: '/about-2',
					template: 'single',
					endpoint: 'pages/about-2',
					params: {

					}
				}
			]);

			return deferred.promise;
		};

		this.fetchRouteRules = function() {
			return $http({
				method: 'GET',
				url: '/routeRules.json',
				params: {}
			}).then(function(response) {
				// HTTP 200-299 Status
				if (angular.isArray(response.data) && response.status === 200) {
					console.log('[apiService] fetchRouteRules(): Fetch success.');
					// Success
					return response.data;
				} else {
					// Error
					console.log('[apiService] fetchRouteRules(): Error reading response.');
					return {
						error: true
					};
				}
			}, function(response) {
				// Error
				console.log('[apiService] fetchRouteRules(): Request error: '+response.status);
				return {
					error: true,
					status: response.status
				};
			});
		};

		// Fetch from API Endpoint
		this.fetchFromEndpoint = function(endpointUri, params) {
			return $http({
				method: 'GET',
				url: API_ENDPOINT + endpointUri,
				params: params
			}).then(function(response) {
				// HTTP 200-299 Status
				if (angular.isArray(response.data) && response.status === 200) {
					console.log('[apiService] fetchFromEndpoint(): Fetch success.');
					// Success
					return response.data;
				} else {
					// Error
					console.log('[apiService] fetchFromEndpoint(): Error reading response.');
					return {
						error: true
					};
				}
			}, function(response) {
				// Error
				console.log('[apiService] fetchFromEndpoint(): Request error: '+response.status);
				return {
					error: true,
					status: response.status
				};
			});
		};

	}]);

})();