// job of this factory to talk to Firebase

'use strict';

angular.module('checklist')
.factory('User', ['$rootScope', function($rootScope) {
  // console.log('user factory loaded');
  function register(user) {
    return $rootScope.afAuth.$createUser(user);
  }

  function login(user) {
    return $rootScope.afAuth.$authWithPassword(user);
  }

  return {register: register, login: login};
}]);
