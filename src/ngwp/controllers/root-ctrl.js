(function() {

	var app = angular.module('ngwp.rootCtrl', []);

	app.controller('rootCtrl', ['$scope', function($scope) {
		$scope.init = function() {
			console.log('[rootCtrl] $scope.init(): Called.');

			$scope.config = {
				pageTitle: 'ngwp'
			};
		};


		// Init
		$scope.init();
	}]);

})();