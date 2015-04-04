(function() {

	var app = angular.module('ngwp.stateFactory', []);

	app.factory('stateFactory', ['$q', function($q) {
		return function(futureState) {
			var deferred = $q.defer();

			var fullState = {
				name: futureState.name,
				url: futureState.url,
				template: '<h1>Test</h1>'
			};

			// Resolve the full state;
			// can be done asynchronously
			deferred.resolve(fullState);

			return deferred.promise;
		};
	}]);

})();