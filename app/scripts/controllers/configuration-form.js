'use strict';

/**
 * @ngdoc function
 * @name miniumMailApp.controller:ConfigurationFormCtrl
 * @description
 * # ConfigurationFormCtrl
 * Controller of the miniumMailApp
 */
angular.module('miniumMailApp')
  .controller('ConfigurationFormCtrl', function ($modalInstance, configurationForm) {
    var self = this;
    this.configurationForm = configurationForm;

    this.save = function () {
      $modalInstance.close(self.configurationForm);
    };

    this.cancel = function () {
      $modalInstance.dismiss('cancel');
    };
  });
