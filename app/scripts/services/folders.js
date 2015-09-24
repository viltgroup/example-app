'use strict';

/**
 * @ngdoc function
 * @name miniumMailApp.service:Folder
 * @description
 * # Folder
 * Service of the miniumMailApp
 */
angular.module('miniumMailApp')
  .factory('Folder', function (repositoryFactory) {
    return repositoryFactory.create([
      {
        "id": "inbox",
        "name": "Inbox"
      },
      {
        "id": "later",
        "name": "Later"
      },
      {
        "id": "sent",
        "name": "Sent"
      },
      {
        "id": "trash",
        "name": "Trash"
      }
    ]);
  });
