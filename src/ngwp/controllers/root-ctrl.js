(function() {

	var app = angular.module('ngwp.rootCtrl', []);

	app.controller('rootCtrl', ['$scope', function($scope) {
		$scope.init = function() {
			console.log('[rootCtrl] $scope.init(): Called.');
		};


		// Init
		$scope.init();
	}]);

})();