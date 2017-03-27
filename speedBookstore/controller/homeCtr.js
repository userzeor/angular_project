define(['angular','jquery'],function (an,$) {
	var homeModule = angular.module('homeModule',[]);
	homeModule.controller('homeCtr', ['$scope','MethodFun','$rootScope','$http','$window',function ($scope,MethodFun,$rootScope,$http,$window) {
        $scope.TabActive = MethodFun.TabActive;
        $scope.notTabActive = MethodFun.notTabActive;
        $scope.$on('change', function () { //监听services里值得变化
	         $scope.showdialog = MethodFun.isAlert;
	    });
	    $scope.$on('showlogin', function () { //监听services里值得变化
	        $scope.TabActive = MethodFun.TabActive;
        	$scope.notTabActive = MethodFun.notTabActive;
	    });
	    $scope.$on('showregister', function () { //监听services里值得变化
	        $scope.TabActive = !MethodFun.TabActive;
        	$scope.notTabActive = !MethodFun.notTabActive;
	    });
	    $scope.closelogin = function () {//关闭登录框
        	MethodFun.isAlert = !MethodFun.isAlert;
        	$rootScope.$broadcast('change'); //创建一个事件监听
        };
        $scope.switchlogin = function () {//显示登录框
        	$scope.TabActive = MethodFun.TabActive;
        	$scope.notTabActive = MethodFun.notTabActive;
        };
        $scope.switchregister = function () {//显示注册框
        	$scope.TabActive = !MethodFun.TabActive;
        	$scope.notTabActive = !MethodFun.notTabActive;
        };
        $scope.login = function () {
        	if ($scope.LoginName) {
        		var em = /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/;
        		var phone = /^1[34578]\d{9}$/;
        		if (!(em.test($scope.LoginName)||phone.test($scope.LoginName))) {
        			$scope.loginError = '手机号/邮箱格式不对';
        			return;
        		}
        	}else{
    			$scope.loginError = '手机号/邮箱不能为空';
    			return;
    		}
        	if ($scope.LoginPwd) {
        		if ($scope.LoginPwd.length<6||$scope.LoginPwd.length>20) {
        			$scope.loginError = '密码必须为6~20个字符';
        		    return;
        		}
        	}else{
        		$scope.loginError = '请输入密码';
        		return;
        	}
        	var datas = $('#login-form').serialize();
        	var objData = MethodFun.getFormJson(datas);
        	$http({
        		method:'GET',
        	    url:'http://127.0.0.1:38080/angularBoutique/login',
        	    params:objData
	        }).then(function (restext) {
	        	if (restext.data.status==200) {
	        		window.location.reload();
	        	}else{
	        		$scope.loginError = '网络不好，请重试';
	        	}
	        });
        }
        $scope.registerfun = false;
        $scope.ischecked = function () {
    		$scope.registerfun=!$scope.registerfun;
    	}
        $scope.getCode = function () {
        	if ($scope.registerName) {
        		var em = /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/;
        		var phone = /^1[34578]\d{9}$/;
        		if (em.test($scope.registerName)) {
        			$http({
		        		method:'GET',
		        	    url:'http://127.0.0.1:38080/angularBoutique/getprovingcode',
		        	    params:{'userEmail':$scope.registerName}
			        }).then(function (restext) {
			        	if (restext.data.status==200) {
		//	        		console.log(restext);
			        		$scope.code = restext.data.code;
			        	}else{
			        		$scope.registerError = '网络不好，请重试';
			        	}
			        });
        		}
        		if (phone.test($scope.registerName)) {
        			var code = parseInt(Math.random()*10000);
        			$scope.code = code;
        			var t = new Date().toLocaleString();
			        var options={
			            dir: "ltr",
			            lang: "utf-8",
			            icon: "favicon.ico",
			            body: "娱乐之城验证码:  "+code
			        };
			        if(Notification && Notification.permission === "granted"){
		                var n = new Notification("娱乐之城: "+ t, options);    
//			            n.onshow = function(){
//			                console.log("You got me!");
//			            };
//			            n.onclick = function() {
//			                alert("You clicked me!");
//			                window.location = "/";
//			            };
//			            n.onclose = function(){
//			                console.log("notification closed!");
//			            };        
//			            n.onerror = function() {
//			                console.log("An error accured");
//			            }            
			        }
        		}
        	}else{
    			$scope.registerError = '手机号/邮箱不能为空';
    		}
        }
        $scope.register = function () {
        	if ($scope.registerName) {
        		var em = /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/;
        		var phone = /^1[34578]\d{9}$/;
        		if (!(em.test($scope.registerName)||phone.test($scope.registerName))) {
        			$scope.registerError = '手机号/邮箱格式不对';
        			return;
        		}
        	}else{
    			$scope.registerError = '手机号/邮箱不能为空';
    			return;
    		}
        	if ($scope.registerPwd) {
        		if ($scope.registerPwd.length<6||$scope.registerPwd.length>20) {
        			$scope.registerError = '密码必须为6~20个字符';
        		    return;
        		}
        	}else{
        		$scope.registerError = '请输入密码';
        		return;
        	}
        	if (!$scope.registerCode) {
        		$scope.registerError = '验证码不能为空';
        		return;
        	}
        	if ($scope.code!=$scope.registerCode) {
        		$scope.registerError = '验证码错误';
        		return;
        	}
        	if (!$scope.registerfun) {
        		$scope.registerError = '未同意《娱乐之城服务条款》,无法注册';
        		return;
        	}
        	var datas = $('#register-form').serialize();
        	var objData = MethodFun.getFormJson(datas);
        	$http({
        		method:'GET',
        	    url:'http://127.0.0.1:38080/angularBoutique/register',
        	    params:objData
	        }).then(function (restext) {
	        	if (restext.data.status==400) {
	        		$scope.registerError = '账号已被注册';
	        		return;
	        	}
	        	if (restext.data.status==200) {
	        		window.location.reload();
	        	}else{
	        		$scope.registerError = '网络不好，请重试';
	        	}
	        });
        }
        
        
        $window.addEventListener("load", function(){ //桌面消息通知
		    if(Notification && Notification.permission !== "granted"){
		        Notification.requestPermission(function(status){
		            if(Notification.permission !== status){
		                Notification.permission = status;
		            }
		        });
		    }
		});
	}]);
});