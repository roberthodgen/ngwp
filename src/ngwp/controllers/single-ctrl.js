(function() {

	var app = angular.module('ngwp.singleCtrl', []);

	app.controller('singleCtrl', ['$scope', 'post', function($scope, post) {
		$scope.init = function() {
			console.log('[singleCtrl] $scope.init(): Called.');
			$scope.post = post;
		};


		// Init
		$scope.init();
	}]);

})();