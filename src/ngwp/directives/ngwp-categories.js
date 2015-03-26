(function() {

	var app = angular.module('ngwp.categories', ['ngwp.apiService']);


	/**
	 *	Fetches and displays the blog's categories.
	 */

	app.directive('ngwpCategoriesList', function() {
		return {
			restrict: 'EA',
			templateUrl: '/ngwp/templates/ngwp-categories-list.html',
			controller: ['$scope', 'apiService', function($scope, apiService) {
				$scope.init = function() {
					$scope.categories = [];

					apiService.fetchCategories().then(function(response) {
						if (!response.error) {
							$scope.categories = response;
						} else {
							alert('Error loading categories.');
						}
					});
				};


				// Init
				$scope.init();
			}]
		};
	});

})();