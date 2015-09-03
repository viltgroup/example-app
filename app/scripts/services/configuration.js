angular.module('miniumMailApp')
  .factory('configuration', function ($location) {
    var params = $location.search();
    return {
      // random stuff
      randomContacts: params.c || 0,
      randomFolders: params.f || 0,
      randomMails: params.m || 0,
      // in seconds
      loadingTimeoutSeconds: params.t || 1
    };
  });
