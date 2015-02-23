var pointy = angular.module('pointy', ['components', 'ngRoute']);

pointy.config(['$routeProvider', function($routeProvider) {

	$routeProvider
		.when('/prediction', {
			templateUrl: 'includes/viz.html',
			controller: 'pointyController'
		}).otherwise({
			templateUrl: 'includes/welcome.html',
			controller: 'pointyController'
		});

}]);


pointy.controller('pointyController', ['$scope', function($scope) {

	$scope.insights = data.insights;
	$scope.assets = data.assets;

	$scope.addTodo = function() {
		$scope.todos.push({text:$scope.todoText, done:false});
		$scope.todoText = '';
	};

}]);




//Components (reusable directives)

var components = angular.module('components', []);

components.directive('check', function(){
	return{
		restrict: 'E',
		replace: 'true',
		controller: function($scope){
			//component specific functions go here
		},
		templateUrl: '/components/check.html'
	}
});

components.directive('insightcard', function(){
	return{
		restrict: 'E',
		replace: 'true',
		controller: function($scope){
			//component specific functions go here
		},
		templateUrl: '/components/insight-card.html'
	}
});

components.directive('assetcard', function(){
	return{
		restrict: 'E',
		replace: 'true',
		controller: function($scope){
			//component specific functions go here
		},
		templateUrl: '/components/asset-card.html'
	}
});


var data = {};

data.insights = [
	{text:'learn angular', done:true},
	{text:'build an angular app', done:false},
	{text:'build an angular app', done:false}
]

data.assets = [
	{title: "Alpha", desc: 'Description'},
	{title: "Beta", desc: 'Description'},
	{title: "Delta", desc: 'Description'},
	{title: "Kappa", desc: 'Description'},
	{title: "Phi", desc: 'Description'},
	{title: "Psi", desc: 'Description'},
	{title: "Chi", desc: 'Description'},
	{title: "Omega", desc: 'Description'},
]