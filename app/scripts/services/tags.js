'use strict';

/**
 * @ngdoc function
 * @name miniumMailApp.service:Tag
 * @description
 * # Tag
 * Service of the miniumMailApp
 */
angular.module('miniumMailApp')
  .factory('Tag', function (repositoryFactory) {
    return repositoryFactory.create([
      {
        "id": "minium",
        "color": "#fb7537"
      },
      {
        "id": "important",
        "color": "#d9534f"
      }
    ]);
  });
