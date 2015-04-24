'use strict';

// Task is the model that is being injected into this controller

angular.module('checklist')
.controller('TasksCtrl',['$scope', 'Task', '$window', function($scope, Task, $window) {
  $scope.addTask = function(task) {

    var o = {
      title:  task.title,
      due: task.due.getTime(),
      priority: task.priority,
      isComplete:  false,
      createdAt: $window.Firebase.ServerValue.TIMESTAMP
    };

    Task.add(o)
    .then(function(data) {
      console.log('data', data);
    });
  };
}]);
