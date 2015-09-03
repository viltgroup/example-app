'use strict';

/**
 * @ngdoc function
 * @name miniumMailApp.service:Contact
 * @description
 * # Contact
 * Service of the miniumMailApp
 */
angular.module('miniumMailApp')
  .factory('Contact', function (repositoryFactory, randomSizes) {
    var randomContact = function () {
      return {
        "id": "contact_" + chance.integer({min: 1000}),
        "firstName": chance.first(),
        "lastName": chance.last(),
        "email": chance.email()
      };
    };

    return repositoryFactory.create([
      {
        "id": "contact_342",
        "firstName": "Minium",
        "lastName": "Bot",
        "email": "minium@vilt-group.com"
      },
      {
        "id": "contact_377",
        "firstName": "Rui",
        "lastName": "Figueira",
        "email": "rui.figueira@vilt-group.com"
      },
      {
        "id": "contact_398",
        "firstName": "Raphael",
        "lastName": "Rodrigues",
        "email": "raphael.rodrigues@vilt-group.com"
      },
      {
        "id": "contact_399",
        "firstName": "Mario",
        "lastName": "Lameiras",
        "email": "mario.lameiras@vilt-group.com"
      }
    ].concat(_.times(randomSizes.contacts, randomContact)));
  });
