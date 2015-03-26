(function() {

	var app = angular.module('ngwp.pageCtrl', []);

	app.controller('pageCtrl', ['$scope', 'page', function($scope, page) {
		$scope.init = function() {
			console.log('[pageCtrl] $scope.init(): Called.');
			$scope.page = page;
		};


		// Init
		$scope.init();
	}]);

})();