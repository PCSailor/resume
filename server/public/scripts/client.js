var resumeApp = angular.module('ResumeApp', ['ngRoute']); // ResumeApp declared in index.html

resumeApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/home', {
            templateUrl: '/views/home.html',
            controller: 'HomeController',
            controllerAs: 'hc'
        })
        .when('/resume', {
            templateUrl: '/views/resume.html',
            controller: 'ResumeController',
            controllerAs: 'rc'
        })
        .otherwise({
            redirectTo: 'home'
        })
}]);
console.log("client.js is run");