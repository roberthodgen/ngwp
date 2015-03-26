(function() {

	var app = angular.module('ngwp.posts', ['ngwp.apiService']);

	app.directive('ngwpPosts', function() {
		return {
			restrict: 'EA',
			templateUrl: '/ngwp/templates/ngwp-posts.html',
			controller: ['$scope', 'apiService', function($scope, apiService) {
				$scope.init = function() {
					$scope.posts = [];

					apiService.fetchPosts().then(function(response) {
						if (!response.error) {
							$scope.posts = response;
						} else {
							alert('Error loading posts.');
						}
					});
				};


				// Init
				$scope.init();
			}]
		};
	});

})();