var pointy = angular.module('pointy', ['components', 'ngRoute']);

pointy.config(['$routeProvider', function($routeProvider) {

	$routeProvider
		.when('/:file', {
			templateUrl: function($routeParams){
				return 'views/'+ $routeParams.file +'.html'
			},
			controller: 'pointyController'
		}).when('/sma', {
			templateUrl: function($routeParams){
				return 'views/sma.html'
			},
			controller: 'smaController'
		}).otherwise({
			templateUrl: 'views/welcome.html',
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


// SMA COntroller
pointy.controller('smaController', ['$scope', function($scope) {

	$scope.smaView = 'languages';


	$scope.setView = function(view){
		return $scope.smaView = view;
	}

	//Sources
	$scope.sources = data.sources;

	$scope.selectSource = function(source){
		source.source.chosen = true;
	}
	$scope.deselectSource = function(source){
		source.source.chosen = false;
	}


	//Languages
	$scope.languages = data.languages;

	$scope.selectLanguage = function(source){
		source.language.chosen = true;
	}
	$scope.deselectLanguage = function(source){
		source.language.chosen = false;
	}


	//Keywords
	$scope.keywords = data.keywords;
	$scope.suggestedKeywords = data.suggestedKeywords;

	$scope.addKeywords = function(){
		var newArray = [];

		angular.forEach($scope.newKeywords, function(d, i) {
			newArray.push({text: d, source: 'user'});
		});

		$scope.keywords = newArray.concat($scope.keywords);
		$scope.newKeywords = "";
	}

	$scope.deleteKeyword = function(word){
		$scope.keywords.splice(word.$index, 1);
	}

	$scope.chooseKeyword = function(word){
		$scope.keywords.unshift(word);
		$scope.suggestedKeywords.splice(word.$index, 1);
	}


	//Exclusions
	$scope.exclusions = data.exclusions;
	$scope.suggestedExclusions = data.suggestedExclusions;

	$scope.addExclusions = function(){
		var newArray = [];

		angular.forEach($scope.newExclusions, function(d, i) {
			newArray.push({text: d, source: 'user'});
		});

		$scope.exclusions = newArray.concat($scope.exclusions);
		$scope.newExclusions = "";
	}

	$scope.deleteExclusion = function(word){
		$scope.exclusions.splice(word.$index, 1);
	}

	$scope.chooseExclusion = function(word){
		$scope.exclusions.unshift(word);
		$scope.suggestedExclusions.splice(word.$index, 1);
	}


}]);



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
];


data.sources = [
	{title: 'Twitter', image: '', chosen: true},
	{title: 'Facebook', image: '', chosen: true},
	{title: 'Snapchat', image: '', chosen: false},
	{title: 'Reddit', image: '', chosen: true},
	{title: 'Vine', image: '', chosen: false},
	{title: 'Cancer', image: '', chosen: false}
]

data.languages = [
	{title: 'English', chosen: true},
	{title: 'German', chosen: true},
	{title: 'Japanese', chosen: true},
	{title: 'Chinese', chosen: true},
	{title: 'Spanish', chosen: false},
	{title: 'Catalan', chosen: false},
	{title: 'Cholo', chosen: false}
]


data.keywords = [
	{text: "Alpha", source: 'user'}, 
	{text: "Beta", source: 'user'}, 
	{text: "Gamma", source: 'user'},
]
data.suggestedKeywords = [
	{text: "Kappa", source: 'watson'}, 
	{text: "Phi", source: 'watson'}, 
	{text: "Delta", source: 'watson'},
]

data.exclusions = [
	{text: "Alpha", source: 'user'}, 
	{text: "Beta", source: 'user'}, 
	{text: "Gamma", source: 'user'},
]
data.suggestedExclusions = [
	{text: "Kappa", source: 'watson'}, 
	{text: "Phi", source: 'watson'}, 
	{text: "Delta", source: 'watson'},
]