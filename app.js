var pointy = angular.module('pointy', ['components']);

pointy.controller('pointyController', ['$scope', function($scope) {

	$scope.todos = [
		{text:'learn angular', done:true},
		{text:'build an angular app', done:false}
	];

	$scope.addTodo = function() {
		$scope.todos.push({text:$scope.todoText, done:false});
		$scope.todoText = '';
	};

}]);




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
