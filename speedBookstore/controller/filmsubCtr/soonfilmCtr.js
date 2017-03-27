define(['angular','httpRequest','bootstrap-paginator'],function () {
	var soonfilm = angular.module('soonfilm',['httpRequest']);
	soonfilm.controller('soonfilmCtr', ['$scope','myhttpRequest',function ($scope,myhttpRequest) {
        myhttpRequest.httpRequest('https://api.douban.com/v2/movie/coming_soon',{"count":10,"start":0},function (data) {
			$scope.soonfilmData = data;
        	$scope.soonfilmArr = data.subjects;//总集合
        	$scope.soonfilmtotal = data.total;
        	$scope.$apply();
        	$('#page').bootstrapPaginator({ 
	        	bootstrapMajorVersion:3,
	        	size:"large",
			    totalPages:Math.ceil($scope.soonfilmtotal/10),//总页数：由接口返回（AJAX） 
			    currentPage:1,//当前页：由前端指定 
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
	            	if ($(originalEvent.currentTarget).parent().attr("class")!='disabled') {
	            		var clickdatas = {
							"count":10,
							"start":10*(page-1)
						}
	            		myhttpRequest.httpRequest('https://api.douban.com/v2/movie/coming_soon',clickdatas,function (data) {
							$scope.soonfilmData = data;
				        	$scope.soonfilmArr = data.subjects;//总集合
				        	$scope.soonfilmtotal = data.total;
				        	$scope.$apply();
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