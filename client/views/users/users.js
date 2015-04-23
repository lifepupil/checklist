'use strict';

angular.module('checklist')

.controller('UsersCtrl', ['$scope', 'User', '$state', function($scope, User, $state) {
  // console.info ('state is', $state.current.name);
  $scope.name = $state.current.name;

  $scope.submit = function(user) {
    if ($scope.name === 'register') {
      User.register(user)
      .then(function(data) {
        console.log(data);
      })
      .catch(function(err) {
        console.error(err);
      });

    } else {
      User.login(user)
      .then(function(data) {
        console.log(data);
      })
      .catch(function(err) {
        console.error(err);
      });
    }
  };
}]);
