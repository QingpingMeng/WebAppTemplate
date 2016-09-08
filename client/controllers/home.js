var app = angular.module('Instagram');

var HomeCtrl =function ($window,$rootScope,$auth){
	var vm = this;
	vm.isAuthenticated = function(){
		// check if logged in
		return $auth.isAuthenticated();	
	};
};

HomeCtrl.$inject = ['$window','$rootScope','$auth'];

app.controller('HomeCtrl',HomeCtrl);
