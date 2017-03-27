define(['angular','routerConfig','../controller/homesubCtr','../controller/headerCtr','../controller/homeCtr'],function(an,ui,Inertia,$) {
	var app = angular.module('myapp',[
	'router',
	'home',
	'headerModule',
	'homeModule'
	]);
	angular.bootstrap(document,['myapp']);
	return app;
});
