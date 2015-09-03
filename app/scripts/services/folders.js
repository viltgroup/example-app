'use strict';

/**
 * @ngdoc function
 * @name miniumMailApp.service:Folder
 * @description
 * # Folder
 * Service of the miniumMailApp
 */
angular.module('miniumMailApp')
  .factory('Folder', function (repositoryFactory, configuration) {
    var randomFolder = function () {
      var word = chance.word();
      return {
        "id": word,
        "name": chance.capitalize(word)
      };
    };

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
    ].concat(_.times(configuration.randomFolders, randomFolder)));
  });
