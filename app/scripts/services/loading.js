
'use strict'

angular.module('miniumMailApp')
  .service('loading', function(configuration) {

    this.show = function() {
      if (!configuration.loadingTimeSeconds) return;

      $(".loading").show();
      setTimeout(function() {
        $(".loading").hide();
      }, configuration.loadingTimeSeconds * 1000);
    };

    this.hide = function() {
      $(".loading").hide();
    };

  });
