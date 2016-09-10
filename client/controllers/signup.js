var app = angular.module('Instagram');

var SignupCtrl = function($auth){
	var vm = this;

	vm.signup = function(){
		var user = {email: vm.email, password: vm.password};

		$auth.signup(user)
		.catch(function(res){
			console.log(res.data);
		});
	};
};

SignupCtrl.$inject=['$auth'];

app.controller('SignupCtrl', SignupCtrl);
