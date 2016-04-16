var app = angular.module('app', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider){

	$routeProvider.		
		when('/angularJs', {
			templateUrl:'/views/angularJs.html',
			controller:'angularjsController'
		}).
		when('/html5', {
			templateUrl:'/views/html5.html',
			controller:'htmlController',
			controllerAs:'htmlCtrl'
		}).
		when('/css3', {
			templateUrl:'/views/css3.html',
			controller:'cssController'
		}).
		when('/d3js', {
			templateUrl:'/views/d3.html',
			controller:'d3Controller',
			controllerAs:'d3Ctrl'
		}).
		otherwise({
        	redirectTo: '/angularJs'
      });
}]);

