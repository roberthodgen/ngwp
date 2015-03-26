(function() {

	var app = angular.module('ngwp.comments', ['ngwp.apiService']);

	app.directive('ngwpComments', function() {
		return {
			restrict: 'EA',
			templateUrl: '/ngwp/templates/ngwp-comments.html',
			controller: ['$scope', 'apiService', function($scope, apiService) {
				$scope.init = function() {
					$scope.comments = [];

					apiService.fetchCommentsByPostId($scope.post.ID).then(function(response) {
						if (!response.error) {
							$scope.comments = response;
						} else {
							alert('Error loading comments.');
						}
					});
				};


				// Init
				$scope.init();
			}]
		};
	});

})();