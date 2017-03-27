define(['angular'],function () {
	var Method = angular.module('Method',[]);
	Method.service('MethodFun',[function () {
		this.myrandom = function createRandom(num ,from ,to ){
		    var arr=[];
		    for(var i=from;i<=to;i++)
		        arr.push(i);
		    arr.sort(function(){
		        return 0.5-Math.random();
		    });
		    arr.length=num;
		    return arr;
		}
		this.getFormJson = function (datas) {
			var res = {};
			var arr = datas.split('&');
			var length = arr.length;
			for(var i=0; i<length; i++){
				res[arr[i].split('=')[0]] = arr[i].split('=')[1];
			}
			return res;
		}
		this.isAlert = false;
		this.TabActive = true;
        this.notTabActive = false;
        this.searchfilmData = null;
        this.searchUrl = null;
        this.search_text = null;
	}]);
});