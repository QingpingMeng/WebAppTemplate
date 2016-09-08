var app = angular.module('Instagram',['ui.router','ngMessages','satellizer']);

app.config(['$stateProvider','$urlRouterProvider','$authProvider',
		   function($stateProvider,$urlRouterProvider,$authProvider){
	var homeState = {
		url:'/home',
		templateUrl:'views/home.html',
		controller:'HomeCtrl',
		controllerAs:'home'
	};

	var loginState = {
		url:'/login',
		templateUrl:'views/login.html',
		controller:'LoginCtrl',
		controllerAs:'login'
	};

	var signupState = {
		url:'/signup',
		templateUrl:'views/signup.html',
		controller:'SignupCtrl'
	};

	$stateProvider.state('home',homeState);
	$stateProvider.state('login',loginState);
	//$stateProvider.state('signup',signupState);
	
	$urlRouterProvider.otherwise('home');
	
	$authProvider.loginUrl = "http://localhost:3000/auth/login";
	$authProvider.signupUrl = "http://localhost:3000/auth/signup";
}]);

app.run(['$rootScope', function($rootScope){
	$rootScope.$on('$stateChangeStart',function(event, toState, toParams, fromState, fromParams){
		console.log('$stateChangeStart to '+toState.to+'- fired when the toransition begins. toState,toParams : \n',toState, toParams);

	});
	$rootScope.$on('$stateChangeError',function(event, toState, toParams, fromState, fromParams, error){
		console.log('$stateChangeError - fired when an error objectccurs during transition.');
		console.log(arguments);

	});
	$rootScope.$on('$stateChangeSuccess',function(event, toState, toParams, fromState, fromParams){
		console.log('$stateChangeSuccess to '+toState.name+'- fired once the state transition is complete.');

	});
	$rootScope.$on('$viewContentLoaded',function(event){
		console.log('$viewContentLoaded - fired after dom rendered',event);


	});
	$rootScope.$on('$stateNotFound',function(event, unfoundState, fromState, fromParams){
		console.log('$stateNotFound '+unfoundState.to+'  - fired when a state cannot be found by its name.');
		console.log(unfoundState, fromState, fromParams);
	});
}]);
