var app = angular.module('Instagram');

function HomeCtrl (){
	var vm = this;
	vm.isAuthenticated = function(){
		// check if logged in
		return false;
	};
};

app.controller('HomeCtrl',HomeCtrl);
