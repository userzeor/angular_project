define(['jquery','angular','httpRequest','bootstrap-paginator'],function ($) {
	var search = angular.module('search',['httpRequest']);
	search.controller('searchCtr', ['$scope','myhttpRequest','$http','MethodFun','$rootScope',function ($scope,myhttpRequest,$http,MethodFun,$rootScope) {
		$scope.searchfilmData = MethodFun.searchfilmData;
		$scope.currentPage = 1;
		$scope.$on('search', function () { //监听services里值得变化
	        $scope.searchfilmData = MethodFun.searchfilmData;
	        $scope.searchUrl = MethodFun.searchUrl;
	        $scope.search_q = MethodFun.search_text;
        	$scope.searchfilmArr = $scope.searchfilmData.subjects;//总集合
        	$scope.searchfilmtotal = $scope.searchfilmData.total;
        	$scope.$apply();
        	console.log($scope.currentPage);
        	$('#search_pagination').bootstrapPaginator({ 
	        	bootstrapMajorVersion:3,
	        	size:"large",
			    totalPages:Math.ceil($scope.searchfilmtotal/10),//总页数：由接口返回（AJAX） 
			    currentPage:$scope.currentPage,//当前页：由前端指定 
			    numberOfPages:5,//显示的最多分页链接数 
	            useBootstrapTooltip:true,
	            bootstrapTooltipOptions: {
	                placement: 'bottom'
	            },
	            itemTexts: function (type, page, current) {
	                switch (type) {
	                    case "first":
	                        return "首页";
	                    case "prev":
	                        return "上一页";
	                    case "next":
	                        return "下一页";
	                    case "last":
	                        return "尾页";
	                    case "page":
	                        return page;
	                }
	            },
	            tooltipTitles: function (type, page, current) {
	                switch (type) {
		                case "first":
		                    return "首页";
		                case "prev":
		                    return "上一页";
		                case "next":
		                    return "下一页";
		                case "last":
		                    return "尾页";
		                case "page":
		                    return "第"+ page+"页";
	                }
	            },
	            shouldShowPage:function(type, page, current){
	                switch(type)
	                {
	                    case "first":
		                    return true;
		                case "prev":
		                    return true;
		                case "next":
		                    return true;
		                case "last":
		                    return true;
		                case "page":
		                    return true;
	                }
	            },
	            itemContainerClass: function (type, page, current) {
	                return (page === current) ? "disabled" : "";
	            },
	            onPageClicked: function(e,originalEvent,type,page){
	            	console.log($scope.searchUrl)
	            	if ($(originalEvent.currentTarget).parent().attr("class")!='disabled') {
	            		var clickdatas = {
	            			"q":$scope.search_q,
							"count":10,
							"start":10*(page-1)
						}
	            		$scope.currentPage = page;
	            		console.log($scope.currentPage);
	            		myhttpRequest.httpRequest($scope.searchUrl,clickdatas,function (data) {
							MethodFun.searchfilmData = data;
		                    $rootScope.$broadcast('search');
				        });
	            	}
	            },
			    onChangePage:function(e,obj){//returns page_num and rows_per_page 
			        //当分页被点击的时候，事件回调 
			        //obj.currentPage;//获取点击对象里的当前页 
	//			        console.log(obj);
			    } 
			});
	    });
    }]);
})