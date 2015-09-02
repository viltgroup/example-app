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
    'ngTagsInput'
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
  .filter('contactName', function() {
    return function (id) {
      if (!id) return null;
      var contacts = data.contacts.filter(function (c) { return c.id === id });
      if (contacts.length === 0) return null;
      var c = contacts[0];
      return c.firstName + ' ' + c.lastName;
    };
  })
  .filter('countMails', function() {
    return function (folder) {
      if (!folder) return 0;
      return data.mails.filter(function (m) {
        return m.folders.indexOf(folder.id) !== -1;
      }).length;
    };
  });
