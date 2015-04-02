(function() {

	var app = angular.module('ngwp', [
		'ngSanitize',
		'ui.router',		// Angular UI Router via https://github.com/angular-ui/ui-router
		'ngwp.rootCtrl',
		'ngwp.blogCtrl',
		'ngwp.pageCtrl',
		'ngwp.singleCtrl',
		'ngwp.archiveCtrl',
		'ngwp.apiService',
		'ngwp.posts',	// ngwpPosts directive
		'ngwp.footer',
		'ngwp.comments',
		'ngwp.categories'
	]);


	// TODO: transition BACK to Angular's built in router...
	app.config(['$stateProvider', function($stateProvider) {


		/**
		 *	main
		 *
		 *	All routes inherit from `main`, this loads your blog and makes it available on subsequent child scopes.
		 *
		 *	NOTE: This is an abstract route and cannot be navigated to.
		 */

		$stateProvider.state('main', {
			url: '/',
			abstract: true,
			templateUrl: '/ngwp/templates/main.html',
			controller: 'blogCtrl',
			resolve: {
				blog: ['apiService', function(apiService) {
					return apiService.fetchBlog();
				}]
			}
		});


		/**
		 *	main.home
		 *
		 *	The home page of the blog;
		 *	this state is loaded when the user visits the root.
		 */

		$stateProvider.state('main.home', {
			url: '',
			templateUrl: '/ngwp/templates/home.html',
			controller: 'archiveCtrl',
			resolve: {
				posts: ['apiService', function(apiService) {
					return apiService.fetchPosts();
				}]
			}
		});


		/**
		 *	main.page
		 *
		 *	Displays a single page.
		 */

		$stateProvider.state('main.page', {
			url: '^/pages/:pageSlug',
			templateUrl: '/ngwp/templates/page.html',
			controller: 'pageCtrl',
			resolve: {
				page: ['$stateParams', 'apiService', function($stateParams, apiService) {
					return apiService.fetchPage($stateParams.pageSlug);
				}]
			}
		});


		/**
		 *	main.post
		 *
		 *	Displays a single post.
		 */

		$stateProvider.state('main.post', {
			url: '^/posts/:postId',
			templateUrl: '/ngwp/templates/single.html',
			controller: 'singleCtrl',
			resolve: {
				post: ['$stateParams', 'apiService', function($stateParams, apiService) {
					return apiService.fetchPost($stateParams.postId);
				}]
			}
		});


		/**
		 *	main.category
		 *
		 *	Displays a list of posts belonging to a given category.
		 */

		$stateProvider.state('main.category', {
			url: '^/category/:categoryId',
			templateUrl: '/ngwp/templates/archive.html',
			controller: 'archiveCtrl',
			resolve: {
				posts: ['$stateParams', 'apiService', function($stateParams, apiService) {
					return apiService.fetchPostsByCategoryId($stateParams.categoryId);
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