define(['angular','../controller/filmsubCtr/heatfilmCtr','../controller/filmsubCtr/soonfilmCtr','../controller/filmsubCtr/topfilmCtr','../controller/filmsubCtr/boxofficefilmCtr'],function () {
	var film = angular.module('film',['heatfilm','soonfilm','topfilm','boxofficefilm']);
	film.controller('filmCtr', ['$scope','$rootScope','MethodFun','$state',function ($scope,$rootScope,MethodFun,$state) {
        $scope.isactive = function (index) {
        	return $state.current.name === index;
        }
	}]);
});