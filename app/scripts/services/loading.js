
'use strict'

angular.module('miniumMailApp')
    .service('loading', function() {

        this.show = function() {
            $(".loading").show();
            setTimeout(function() {
                $(".loading").toggle();
            }, 1000);
        }

        this.hide = function() {
            $(".loading").hide();
        }

    });
