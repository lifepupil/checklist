'use strict';

angular.module('checklist', ['firebase', 'ui.router'])
.config(['$stateProvider','$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('home', {url: '/', templateUrl: '/views/home/home.html'})
  .state('about', {url: '/about', templateUrl: '/views/home/about.html'})
  .state('FAQ', {url: '/FAQ', templateUrl: '/views/home/FAQ.html'})
  .state('contact', {url: '/contact', templateUrl: '/views/home/contact.html'})
  .state('register', {url: '/register', templateUrl: '/views/users/users.html', controller: 'UsersCtrl'})
  .state('login', {url: '/login', templateUrl: '/views/users/users.html', controller: 'UsersCtrl'});
}])

.run(['$rootScope','$window', '$firebaseAuth', 'firebaseUrl', function($rootScope, $window, $firebaseAuth, firebaseUrl) {
  $rootScope.fbRoot = new $window.Firebase(firebaseUrl);
  $rootScope.afAuth = $firebaseAuth($rootScope.fbRoot);
}]);
