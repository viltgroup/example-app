'use strict';

/**
 * @ngdoc function
 * @name miniumMailApp.service:configuration
 * @description
 * # configuration
 * Service of the miniumMailApp
 */
angular.module('miniumMailApp')
  .factory('configuration', function ($location) {
    var params = $location.search();
    return {
      // in seconds
      loadingTimeSeconds: params.t || 1
    };
  });
