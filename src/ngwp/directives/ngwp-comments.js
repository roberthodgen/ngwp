(function() {

	var app = angular.module('ngwp.comments', ['ngwp.apiService']);


	/**
	 *	Fetches the comments for the parent controller's `$scope.post`;
	 *	will display each comment, if any are found.
	 */

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