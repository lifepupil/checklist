// job of this factory to talk to Firebase

'use strict';

angular.module('checklist')
.factory('User', ['$rootScope', function($rootScope) {

  // this listens for changes in login status
  // $rootScope.afAuth.$onAuth(function(authData) {
  //   if (authData) {
  //     console.log('logged in as:', authData.uid);
  //   } else {
  //     console.log('logged out');
  //     $rootScope.$broadcast('');
  //   }
  // });



  // console.log('user factory loaded');
  function register(user) {
    return $rootScope.afAuth.$createUser(user);
  }

  function login(user) {
    console.log('login');
    return $rootScope.afAuth.$authWithPassword(user);
  }

  function logout() {
    console.log('logout');
    return $rootScope.afAuth.$unauth();
  }

  return {dog: register, login: login, logout: logout};
}]);
