'use strict';

/**
 * @ngdoc function
 * @name miniumMailApp.controller:BrowserCtrl
 * @description
 * # BrowserCtrl
 * Controller of the miniumMailApp
 */
angular.module('miniumMailApp')
  .controller('BrowserCtrl', function ($modalInstance, $sce) {
    var self = this;

    this.navigate = function (event) {
      if (event && event.keyCode !== 13) return;
      self.navigationUrl = $sce.trustAsResourceUrl(self.url);
    };

    this.openInNewWindow = function () {
      $modalInstance.dismiss('close');
      window.open(self.url, '_blank');
    };


    this.close = function () {
      $modalInstance.dismiss('close');
    };

    this.url = 'http://minium.vilt.io';
    this.navigate();
  });
