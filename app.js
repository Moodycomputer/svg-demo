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


			$scope.overlay = false;

			$scope.overlaySwitch = function(){
				$scope.overlay = true;
			}



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
	{title: "Epsilon", desc: 'Description'},
	{title: "Theta", desc: 'Description'},
	{title: "Zeta", desc: 'Description'},
	{title: "Eta", desc: 'Description'},
	{title: "Theta", desc: 'Description'},
	{title: "Iota", desc: 'Description'},
	{title: "Kappa", desc: 'Description'},
	{title: "Lambda", desc: 'Description'},
	{title: "Mu", desc: 'Description'},
	{title: "Nu", desc: 'Description'},
	{title: "Xi", desc: 'Description'},
	{title: "Omicron", desc: 'Description'},
	{title: "Pi", desc: 'Description'},
	{title: "Rho", desc: 'Description'},
	{title: "Sigma", desc: 'Description'}
]