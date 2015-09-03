
'use strict'

angular.module('miniumMailApp')
  .service('loading', function(configuration) {

    this.show = function() {
        $(".loading").show();
        setTimeout(function() {
            $(".loading").hide();
        }, configuration.loadingTimeoutSeconds * 1000);
    };

    this.hide = function() {
        $(".loading").hide();
    };

  });
