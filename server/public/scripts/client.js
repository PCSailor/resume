console.log("client.js is checked against <Working_ToDoList_AngJS-Mongo>")
var resumeApp = angular.module('ResumeApp', ['ngRoute']);

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