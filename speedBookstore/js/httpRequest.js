define(['angular'],function () {
	var httpRequest = angular.module('httpRequest',[]);
	httpRequest.service('myhttpRequest',['$window',function ($window) {
		this.httpRequest = function (url,data,callback) {
			var fnSuffix=Math.random().toString().replace('.','');
	        var JSON_CALLBACK = 'myjsonp_2015007'+'_'+fnSuffix;
		    $window[JSON_CALLBACK] = function (data) {
		      	callback(data);
		      	$window.document.body.removeChild(script);
		    }
		    var querystring = url+(url.indexOf('?')==-1 ? '?':'&');
		    for (var i in data) {
		    	querystring+=i+'='+data[i]+'&';
		    }
		    querystring+='callback='+JSON_CALLBACK;
		    var script = $window.document.createElement('script');
		    script.src = querystring;
		    $window.document.body.appendChild(script);
//		    console.log(querystring);
		}
	}]);
	    
});


// $.ajax({
//   type : "GET", //jquey是不支持post方式跨域的
//   async: true,
//   url : "https://api.douban.com/v2/movie/in_theaters", //跨域请求的URL
//   dataType : "jsonp",
//   //传递给请求处理程序，用以获得jsonp回调函数名的参数名(默认为:callback)
//   jsonp: "callback",
//   //自定义的jsonp回调函数名称，默认为jQuery自动生成的随机函数名
////	         jsonpCallback:"success_jsonpCallback",
//   //成功获取跨域服务器上的json数据后,会动态执行这个callback函数
//   success : function(json){ 
//   	alert('1');
//       console.log(json); 
//   } 
// }); 




//app.factory('httpInterceptor', [ '$q', '$injector',function($q, $injector) { //http拦截器
//	    var httpInterceptor = { 
//	      'responseError' : function(response) { 
////	        console.log(response);
////	        return $q.reject(response); 
//	      }, 
//	      'response' : function(response) { 
////	        console.log(response);
//	        return response; 
//	      }, 
//	      'request' : function(config) { 
//	      	console.log(config)
//	        if (config.method=='JSONP') {
////	        	config.url = config.url+'?callback=myjson_2015007';
//	        }
//	        return config; 
//	      }, 
//	      'requestError' : function(config){ 
////	        console.log(config);
//	        return $q.reject(config); 
//	      } 
//	    } 
//	  return httpInterceptor; 
//	}]);

// $httpProvider.interceptors.push('httpInterceptor');在config里面注入http拦截器