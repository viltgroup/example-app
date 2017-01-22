'use strict';

/**
 * @ngdoc function
 * @name miniumMailAppApp.controller:NavbarCtrl
 * @description
 * # NavbarCtrl
 * Controller of the miniumMailAppApp
 */
angular.module('miniumMailApp')
  .controller('NavbarCtrl', function ($modal, loading, configuration) {

    this.openRandomGeneratorWindow = function() {
      $modal.open({
        templateUrl: 'views/random-generator-form.html',
        controller: 'RandomGeneratorFormCtrl',
        controllerAs: 'randomGeneratorFormCtrl'
      });
    };

    this.openConfigurationWindow = function() {
      var modalInstance = $modal.open({
        templateUrl: 'views/configuration-form.html',
        controller: 'ConfigurationFormCtrl',
        controllerAs: 'configFormCtrl',
        resolve: {
          configurationForm: function () {
            return angular.copy(configuration);
          }
        }
      });
      modalInstance.result.then(function (configurationForm) {
        angular.copy(configurationForm, configuration);
      });
    };

    this.openEmbeddedBrowser = function() {
      var modalInstance = $modal.open({
        templateUrl: 'views/browser.html',
        controller: 'BrowserCtrl',
        controllerAs: 'browserCtrl',
        size: 'lg'
      });
    };


  });
