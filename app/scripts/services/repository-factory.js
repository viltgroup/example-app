'use strict';

/**
 * @ngdoc function
 * @name miniumMailApp.service:Contact
 * @description
 * # Contact
 * Service of the miniumMailApp
 */
angular.module('miniumMailApp')
  .service('repositoryFactory', function () {
    return {
      create: function(data) {
        return {
          get: function(id) {
            return _.find(data, { id: id });
          },
          query: function(filter) {
            return filter ? _.filter(data, filter) : data;
          },
          save: function(o) {
            o = angular.copy(o);
            if (!o.id) {
              o.id = '' + new Date().getTime();
              data.push(o);
            } else {
              var i = _.findIndex(data, { id: o.id });
              if (i !== -1) {
                data[i] = o;
              } else {
                data.push(o);
              }
            }
            return o;
          },
          remove: function(o) {
            var i = _.findIndex(data, { id: o.id });
            if (i !== -1) {
              data.splice(i, 1);
            } else {
              console.log("Could not find", o);
            }
          }
        };
      }
    }
  });
