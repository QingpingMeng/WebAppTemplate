var app = angular.module('Instagram');

var LoginCtrl = function($rootScope, $auth, $window){
	var vm = this;

	vm.facebookSignin = function(){
		$auth.authenticate('facebook')
		.then(function(res){
			$window.localStorage.currentUser = JSON.stringify(res.data.user);
			$rootScope.currentUser = res.data.user;
		});
	};


	vm.emailLogin = function(){
		$auth.login({email: vm.email, password: vm.password})
		.then(function(response){
			$window.localStorage.currentUser = JSON.stringify(response.data.user);
			$rootScope.currentUser = response.data.user;
		})
		.catch(function(res){
			vm.errorMessage={};
			angular.forEach(res.data.message, function(message, field){
				vm.loginForm[field].$setValidity('server',false);
				vm.errorMessage[field] = res.data.message[field];
			});
		});
	};
};

LoginCtrl.$inject=['$rootScope','$auth','$window'];
app.controller('LoginCtrl',LoginCtrl);
