define(['angular','uiRouter','Inertia','jquery','httpRequest','../services/Method'],function (an,ui,Inertia) {
	var home = angular.module('home',['ui.router','httpRequest','Method']);
	home.controller('homesubCtr', ['$scope','myhttpRequest','MethodFun',function ($scope,myhttpRequest,MethodFun) {
		var ele = $('#ball')[0];
		new Inertia(ele, {
            // 是否吸附边缘
            edge: true
        });
        myhttpRequest.httpRequest('https://api.douban.com/v2/movie/in_theaters',{"count":30,"start":0},function (data) {
        	var subjects = data.subjects;
        	var randomArr = [];
        	var indexArr = MethodFun.myrandom(16,0,20);
        	for (var i=0;i<indexArr.length;i++) {
        		randomArr.push(subjects[indexArr[i]]);
        	}
        	$scope.filmlist = randomArr;
        	var sidebarArr = [];
        	var indexArr = MethodFun.myrandom(15,0,20);
        	for (var i=0;i<indexArr.length;i++) {
        		sidebarArr.push(subjects[indexArr[i]].title);
        	}
        	$scope.filmtitle = sidebarArr;
        	
        	$scope.$apply();
        });
        
        myhttpRequest.httpRequest('https://api.douban.com/v2/music/search?q="流行"',{"count":50,"start":0},function (data) {
        	var musics = data.musics;
        	var randomArr = [];
        	var indexArr = MethodFun.myrandom(16,0,30);
        	for (var i=0;i<indexArr.length;i++) {
        		randomArr.push(musics[indexArr[i]]);
        	}
        	$scope.musiclist = randomArr;
        	
        	var sidebarArr = [];
        	var indexArr = MethodFun.myrandom(15,0,30);
        	for (var i=0;i<indexArr.length;i++) {
        		sidebarArr.push(musics[indexArr[i]].title);
        	}
        	$scope.musictitle = sidebarArr;
        	
        	$scope.$apply();
        });
        
        myhttpRequest.httpRequest('https://api.douban.com/v2/book/search?q="科幻"',{"count":50,"start":0},function (data) {
        	var books = data.books;
        	var randomArr = [];
        	var indexArr = MethodFun.myrandom(16,0,30);
        	for (var i=0;i<indexArr.length;i++) {
        		randomArr.push(books[indexArr[i]]);
        	}
        	$scope.bookslist = randomArr;
        	
        	var sidebarArr = [];
        	var indexArr = MethodFun.myrandom(15,0,30);
        	for (var i=0;i<indexArr.length;i++) {
        		sidebarArr.push(books[indexArr[i]].title);
        	}
        	$scope.bookstitle = sidebarArr;
        	
        	$scope.$apply();
        });
	}]);
})