(function() {

	var app = angular.module('ngwp.blogCtrl', []);

	app.controller('blogCtrl', ['$scope', 'blog', function($scope, blog) {
		$scope.init = function() {
			console.log('[blogCtrl] $scope.init(): Called.');
			$scope.blog = blog;
		};


		// Init
		$scope.init();
	}]);

})();