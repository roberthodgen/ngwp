(function() {

	var app = angular.module('ngwp.footer', ['ngwp.apiService']);

	app.directive('ngwpFooter', function() {
		return {
			restrict: 'EA',
			templateUrl: '/ngwp/templates/ngwp-footer.html'
		};
	});

})();