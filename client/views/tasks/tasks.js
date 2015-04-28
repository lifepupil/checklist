'use strict';

// Task is the model that is being injected into this controller

angular.module('checklist')
.controller('TasksCtrl',['$scope', 'Task', '$window', function($scope, Task, $window) {
  // WE MOVED THE INIT IN Task.js TO THE task OBJECT AS A FUNCTION TO USE BY THE CONTROLLER
  // Task.init();
  // WE CHANGE THIS SO THAT WE CAN BRING IN THE ARRAY AND DISPLAY ON SCREEN
  $scope.afTasks = Task.init();

  $scope.sort = function(sortString) {
    var modifier = ($scope.taskOrder === sortString) ? '-' : '';
    $scope.taskOrder = modifier+sortString;
  };


  $scope.editTask = function(task) {
    task.due = new Date(task.due);
    $scope.task = task;
  };

  $scope.updateTask = function(task) {

    // THIS DOES NOT DELETE INFORMATION IN task BECAUSE $scope.task IS A POINTER TO THE FORM
    // AND ONLY ITS POINTER TO THE FIREBASE ARRAY IS BROKEN
    $scope.task = {};
    task.due = task.due.getTime();
    Task.save(task);
  }

  $scope.toggleComplete = function(task) {
    Task.save(task);
  };

  $scope.deleteTask = function(task) {
    Task.deleteTask(task);
  };

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
      // THIS CLEARS THE FORM WHICH IS $scope.task
      $scope.task = {};
    });
  };
}]);
