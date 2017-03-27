define(['angular','httpRequest'],function () {
	var boxofficefilm = angular.module('boxofficefilm',['httpRequest']);
	boxofficefilm.controller('boxofficefilmCtr', ['$scope','myhttpRequest','$http',function ($scope,myhttpRequest,$http) {
		var datas = {
//			"count":30,
//			"start":0
		}
//		myhttpRequest.httpRequest('http://route.showapi.com/578-4?showapi_appid=33659&showapi_sign=0c21caae5c884fbfb20b1696aba92523',datas,function (data) {
////			$scope.boxfilmData = data;
////      	$scope.boxfilmArr = data.subjects;//总集合
//          console.log(data);
//      	$scope.$apply();
//      });
        $http({
        	url:'http://route.showapi.com/578-4?showapi_appid=33659&showapi_sign=0c21caae5c884fbfb20b1696aba92523',
        }).then(function (data) {
        	console.log(data);
        })
    }]);
})