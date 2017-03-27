require.config({
    baseUrl: "js/",
    paths: {
    	"angular":"../lib/angular.min",
    	"uiRouter":"../lib/angular-ui-router.min",
        "jquery": "../lib/jquery.min",
        "bootstrap": "../lib/bootstrap.min",
        "bootstrap-paginator":'../lib/bootstrap-paginator.min',
        "offcanvas": "../lib/offcanvas",
        "ie10": "../lib/ie10-viewport-bug-workaround",
        "ie":"../lib/ie-emulation-modes-warning",
        "Inertia":"../lib/Inertia",
        "app":"app"
    },
    shim:{
    	"uiRouter":["angular"],
    	"bootstrap": ["jquery"],
    	"offcanvas": ["jquery","app"],
    	"Inertia": {
            exports:'Inertia'
        }
    }
});

require(['angular','jquery','bootstrap','offcanvas','ie10','ie','app'],function() {
//	console.log(Inertia);
});
