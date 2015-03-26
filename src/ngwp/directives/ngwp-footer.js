(function() {

	var app = angular.module('ngwp.footer', []);


	/**
	 *	Simply includes a footer template.
	 */

	app.directive('ngwpFooter', function() {
		return {
			restrict: 'EA',
			templateUrl: '/ngwp/templates/ngwp-footer.html'
		};
	});

})();