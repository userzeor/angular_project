define(['angular','../controller/filmCtr','../controller/searchCtr'],function () {
	var headerModule = angular.module('headerModule',['film','search']);
	headerModule.controller('headerCtr', ['$scope','$rootScope','MethodFun','$state','myhttpRequest',function ($scope,$rootScope,MethodFun,$state,myhttpRequest) {
        $scope.showlogin = function () {
        	MethodFun.isAlert = !MethodFun.isAlert;
        	$scope.TabActive = MethodFun.TabActive;
        	$scope.notTabActive = MethodFun.notTabActive;
        	$rootScope.$broadcast('change'); //创建一个事件监听
        	$rootScope.$broadcast('showlogin'); //创建一个事件监听
        };
        $scope.showregister = function () {
        	MethodFun.isAlert = !MethodFun.isAlert;
        	$scope.TabActive = !MethodFun.TabActive;
        	$scope.notTabActive = !MethodFun.notTabActive;
        	$rootScope.$broadcast('change'); //创建一个事件监听
        	$rootScope.$broadcast('showregister'); //创建一个事件监听
        }
        $scope.isactive = function (index) {
        	if ($state.current.name.indexOf('.')>0) {
        		return $state.current.name.substring(0,$state.current.name.indexOf('.')) === index;
        	} else{
        		return $state.current.name === index;
        	}
        }
        $scope.search_type = '搜索类型';
        $scope.searchUrl = 'v2/movie';
        $scope.searchType = function (searchUrl,type) {
        	$scope.search_type = type;
        	$scope.searchUrl = searchUrl;
        };
        $scope.search = function () {
        	$state.go('search');
        	MethodFun.searchUrl = 'https://api.douban.com/'+$scope.searchUrl+'/search';
        	MethodFun.search_text = $scope.search_q;
        	myhttpRequest.httpRequest(MethodFun.searchUrl,{"q":$scope.search_q,"count":10,"start":0},function (data) {
				console.log(data);
				MethodFun.searchfilmData = data;
        	    $rootScope.$broadcast('search');
	        });
        }
	}]);
});