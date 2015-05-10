(function() {

	var app = angular.module('ngwp.resources', ['ngResource', 'ngwp.apiEndpoint']);

	app.factory('Post', function (API_ENDPOINT) {
		return $resource(API_ENDPOINT+'v2/posts', {

		}, {
			query: {
				method: 'GET'
			}
		});
	});

})();