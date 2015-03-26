(function() {

	var app = angular.module('ngwp.blogCtrl', []);

	app.controller('blogCtrl', ['$scope', 'blog', function($scope, blog) {
		$scope.init = function() {
			$scope.blog = blog;
		};


		// Init
		$scope.init();
	}]);

})();