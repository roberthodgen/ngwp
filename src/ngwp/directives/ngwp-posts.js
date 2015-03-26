(function() {

	var app = angular.module('ngwp.posts', []);


	/**
	 *	Loops through the parent controller's `$scope.posts`;
	 *	displaying each post sequentially.
	 */

	app.directive('ngwpPosts', function() {
		return {
			restrict: 'EA',
			templateUrl: '/ngwp/templates/ngwp-posts.html'
		};
	});

})();