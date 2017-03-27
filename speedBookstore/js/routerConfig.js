define(['angular','uiRouter'],function () {
	var router = angular.module('router',['ui.router']);
	router.config(['$stateProvider', '$urlRouterProvider','$locationProvider','$sceProvider','$httpProvider',function ($stateProvider, $urlRouterProvider,$locationProvider,$sceProvider,$httpProvider) {
	     $urlRouterProvider.when("", "/PageTab");
	     $stateProvider
	        .state("PageTab", {
	            url: "/PageTab",
	            views: {  
		            '': {  
		                templateUrl: "html/homePage.html",
		                controller:"homeCtr"
		            },  
		            'header@PageTab': {  
		                templateUrl: "html/headerPage.html",
		                controller:"headerCtr"
		            },
		            'body@PageTab':{
		            	templateUrl: "html/homesubPage.html",
	                    controller:"homesubCtr"
		            }
		        }  
	        })
	        .state("Page0", {
	            url:"/Page0",
	            views: {  
	            	'': {  
		                templateUrl: "html/homePage.html",
		                controller:"homeCtr"
		            },  
		            'header@Page0': {  
		                templateUrl: "html/headerPage.html",
		                controller:"headerCtr"
		            },
		            'body@Page0':{
		            	templateUrl: "html/shoppingPage.html"
		            }
		        }
	        })
	        .state("Page1", {
	            url:"/Page1",
	            views: {
	            	'': {  
		                templateUrl: "html/homePage.html",
		                controller:"homeCtr" 
		            },  
		            'header@Page1': {  
		                templateUrl: "html/headerPage.html",
		                controller:"headerCtr"
		            },
		            'body@Page1':{
		            	templateUrl: "html/filmPage.html",
		                controller:"filmCtr"
		            }
		        }
	        })
	        .state("Page1.heatfilm", {
	            url:"/heatfilm",
	            views: {
	            	'film': {  
		                templateUrl: "html/filmsubPage/heatfilmPage.html",
		                controller:"heatfilmCtr"
		            },  
		        }
	        })
	        .state("Page1.soonfilm", {
	            url:"/soonfilm",
	            views: {
	            	'film': {  
		                templateUrl: "html/filmsubPage/soonfilmPage.html",
		                controller:"soonfilmCtr"
		            },  
		        }
	        })
	        .state("Page1.topfilm", {
	            url:"/topfilm",
	            views: {
	            	'film': {  
		                templateUrl: "html/filmsubPage/topfilmPage.html",
		                controller:"topfilmCtr"
		            },  
		        }
	        })
	        .state("Page1.boxofficefilm", {
	            url:"/boxofficefilm",
	            views: {
	            	'film': {  
		                templateUrl: "html/filmsubPage/boxofficefilmPage.html",
		                controller:"boxofficefilmCtr"
		            },  
		        }
	        })
	        .state("Page2", {
	            url:"/Page2",
	            views: {  
	            	'': {  
		                templateUrl: "html/homePage.html",
		                controller:"homeCtr"  
		            },  
		            'header@Page2': {  
		                templateUrl: "html/headerPage.html",
		                controller:"headerCtr"
		            },
		            'body@Page2':{
		            	templateUrl: "html/musicPage.html"
		            }
		        }
	        })
	        .state("Page3", {
	            url:"/Page3",
	            views: {  
	            	'': {  
		                templateUrl: "html/homePage.html",
		                controller:"homeCtr"  
		            },  
		            'header@Page3': {  
		                templateUrl: "html/headerPage.html",
		                controller:"headerCtr"
		            },
		            'body@Page3':{
		            	templateUrl: "html/bookstorePage.html"
		            }
		        }
	        })
	        .state("search",{
	        	url:"/search",
	        	views: {
	        		'': {  
		                templateUrl: "html/homePage.html",
		                controller:"homeCtr"  
		            },  
		            'header@search': {  
		                templateUrl: "html/headerPage.html",
		                controller:"headerCtr"
		            },
		            'body@search':{
		            	templateUrl: "html/searchPage.html",
		                controller:"searchCtr"
		            }
	        	}
	        })
//	    $locationProvider.html5Mode(true);
		$locationProvider.hashPrefix('');//去掉angular路由默认的!号
//		$sceProvider.enabled(false);//关闭$sce服务
//      $sce.trustAsResourceUrl('https://api.douban.com/v2/movie/in_theaters')//信任此url
    }]);
    return router;
});