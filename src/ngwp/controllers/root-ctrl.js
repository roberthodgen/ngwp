(function() {

	var app = angular.module('ngwp.rootCtrl', []);

	app.controller('rootCtrl', ['$scope', function($scope) {
		$scope.init = function() {
			console.log('[rootCtrl] $scope.init(): Called.');

			$scope.config = {
				pageTitle: 'ngwp'
			};

			$scope.$watch(function() {
				return $scope.config.pageTitle;
			}, function(newValue, oldValue) {
				document.title = newValue;
			});
		};


		// Init
		$scope.init();
	}]);

})();