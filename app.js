var pointy = angular.module('pointy', ['components']);

pointy.controller('pointyController', ['$scope', function($scope) {

	$scope.insights = data.insights;

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



var data = {};

data.insights = [
		{text:'learn angular', done:true},
		{text:'build an angular app', done:false},
		{text:'build an angular app', done:false}
	]