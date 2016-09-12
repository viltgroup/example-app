'use strict';

/**
 * @ngdoc overview
 * @name miniumMailApp
 * @description
 * # miniumMailApp
 *
 * Main module of the application.
 */
angular
  .module('miniumMailApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap',
    'ngTagsInput',
    'ngFileUpload'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/folders/:currentFolder', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/folders/inbox'
      });
  })
  .filter('inFolder', function() {
    return function (input, folder) {
      if (!folder) return input;
      return input.filter(function (m) {
        return m.folders.indexOf(folder.id) !== -1;
      });
    };
  })
  .filter('contactName', function(Contact) {
    return function (id) {
      if (!id) return null;
      var c = Contact.get(id);
      return c.firstName + ' ' + c.lastName;
    };
  })
  .filter('countMails', function(Mail) {
    return function (folder) {
      if (!folder) return 0;
      return Mail.query().filter(function (m) {
        return m.folders.indexOf(folder.id) !== -1;
      }).length;
    };
  });
