(function() {

	var app = angular.module('ngwp.apiEndpoint', []);


	/*
	*	Defines the API_ENDPOINT contant.
	*
	*	API_ENDPOINT defines the URL (or URI) of the Wordpress REST API;
	*	the endpoint may live on this domain (e.g. `/wp-api/`);
	*	or reside on a remote server (e.g. `https://api.example.com/wp-api/`);
	*	please verify CORS settings for remote server endpoint!
	*	NOTE: Should always end in trailing slash!
	*/

	app.constant('API_ENDPOINT', '/wp-api/');

})();