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
	{title: 'Flickr', image: '/public/social/flickr.svg', chosen: false},
	{title: 'Google +', image: '/public/social/gplus.svg', chosen: true},
	{title: 'Pinterest', image: '/public/social/pinterest.svg', chosen: false},
	{title: 'Reddit', image: '/public/social/reddit.svg', chosen: true},
	{title: 'Snapchat', image: '/public/social/snapchat.svg', chosen: false},
	{title: 'Tumblr', image: '/public/social/tumblr.svg', chosen: false},
	{title: 'Twitter', image: '/public/social/twitter.svg', chosen: true},
	{title: 'Vine', image: '/public/social/vine.svg', chosen: false},
	{title: 'WebMD', image: '/public/social/webmd.svg', chosen: true},
	{title: 'Wiki', image: '/public/social/wiki.svg', chosen: false},
	{title: 'YouTube', image: '/public/social/youtube.svg', chosen: false},
]

data.languages = [
	{title: 'English', chosen: true},
	{title: 'Spanish', chosen: true},
	{title: 'Japanese', chosen: true},
	{title: 'French', chosen: true},
	{title: 'Korean', chosen: true},
	{title: 'Chinese', chosen: true},
	{title: 'German', chosen: false},
	{title: 'Arabic', chosen: false},
	{title: 'Czech', chosen: false},
	{title: 'Greek', chosen: false},
	{title: 'Catalan', chosen: false},
	{title: 'Italian', chosen: false},
]




data.keywords = [
	{text: "Disney", source: 'user'}, 
	{text: "measles", source: 'user'}, 
	{text: "rash", source: 'user'},
	{text: "vaccines", source: 'user'}, 
	{text: "symptons", source: 'user'}, 
	{text: "ER", source: 'user'},
	{text: "emergency room", source: 'user'},
	{text: "hospital", source: 'user'},
	{text: "California", source: 'user'},
	{text: "Anaheim", source: 'user'},
	{text: "Mickey Mouse", source: 'user'},
	{text: "stranger danger", source: 'user'},
	{text: "virus", source: 'user'},
	{text: "infection", source: 'user'},
	{text: "cough", source: 'user'},
	{text: "runny nose", source: 'user'},
	{text: "LAX", source: 'user'},
	{text: "koplik's spots", source: 'user'},
	{text: "illness", source: 'user'},
]
data.suggestedKeywords = [
	{text: "sore throat", source: 'user'},
	{text: "inflamed eyes", source: 'user'},
	{text: "fever", source: 'user'},
	{text: "symptoms", source: 'user'},
	{text: "United States", source: 'user'},
	{text: "January", source: 'user'},
]


data.exclusions = [
	{text: "flu", source: 'user'},
	{text: "six flags", source: 'user'},
	{text: "chicken pox", source: 'user'},
	{text: "Knotts Berry Farm", source: 'user'},
	{text: "Disney World", source: 'user'},
	{text: "Magic Kingdom", source: 'user'},
	{text: "Disney World", source: 'user'},
	{text: "Florida", source: 'user'},
	{text: "adult", source: 'user'},
	{text: "Utah", source: 'user'},
	{text: "Nevada", source: 'user'},
	{text: "Washington", source: 'user'},
]
data.suggestedExclusions = [
	{text: "Universal Studios", source: 'user'},
	{text: "influenza", source: 'user'},
	{text: "common cold", source: 'user'},
	{text: "Knotts Berry Farm", source: 'user'},
	{text: "Epcot", source: 'user'},
	{text: "Magic Kingdom", source: 'user'},
]