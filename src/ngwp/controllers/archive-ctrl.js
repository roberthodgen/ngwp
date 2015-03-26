(function() {

	var app = angular.module('ngwp.archiveCtrl', []);

	app.controller('archiveCtrl', ['$scope', 'posts', function($scope, posts) {
		$scope.init = function() {
			console.log('[archiveCtrl] $scope.init(): Called.');
			$scope.posts = posts;
		};


		// Init
		$scope.init();
	}]);

})();