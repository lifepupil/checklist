'use strict';

angular.module('checklist')

// The name of this model is 'Task'
.factory('Task', ['$rootScope', '$firebaseArray', function($rootScope, $firebaseArray) {
  var fbTasks;
  var afTasks;


  // WE USE INIT SO THAT IF THE ACTIVE USER CHANGES THEN ANY TASKS WILL BE PROPERLY ASSIGNED
  function init() {
    fbTasks = $rootScope.fbRoot.child('users/' + $rootScope.activeUser.uid + '/tasks');
  // CAN ALSO DO BELOW (SORTA)
  // var fbTasks = 'https://checklist-cdr.firebaseio.com/users/simplelogin3/tasks';
    afTasks = $firebaseArray(fbTasks);
    return afTasks;
  }

  function edit(task) {
    // return afTasks
  }

  function save(task) {
    return afTasks.$save(task);
  }

  function add(task) {
    return afTasks.$add(task);
  }

  function deleteTask(task) {
    return afTasks.$remove(task);
  }

  return {add: add, init: init, deleteTask: deleteTask, save: save, edit: edit};
}]);
