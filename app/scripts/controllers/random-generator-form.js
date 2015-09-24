'use strict';

/**
 * @ngdoc function
 * @name miniumMailApp.controller:RandomGeneratorFormCtrl
 * @description
 * # ConfigurationFormCtrl
 * Controller of the miniumMailApp
 */
angular.module('miniumMailApp')
  .controller('RandomGeneratorFormCtrl', function ($modalInstance, Folder, Contact, Mail) {
    var self = this;

    var randomFolder = function () {
      var word = faker.lorem.words(1)[0];
      Folder.save({
        "id": word,
        "name": _.capitalize(word)
      });
    };
    var randomContact = function () {
      Contact.save({
        "id": "contact_" + faker.random.number({min: 1000}),
        "firstName": faker.name.firstName(),
        "lastName": faker.name.lastName(),
        "email": faker.internet.email()
      });
    };
    var randomMail = function () {
      var contactIds = _.collect(Contact.query(), "id");
      var folderIds = _.collect(Folder.query(), "id");

      Mail.save({
        "id": "mail_" + faker.random.number({min: 1000}),
        "contact_id": faker.random.arrayElement(contactIds),
        "tags": faker.lorem.words(faker.random.number({ min: 0, max: 3 })),
        "folders": [ faker.random.arrayElement(folderIds) ],
        "time": faker.date.past().getTime(),
        "subject": faker.lorem.sentence(3, 10),
        "message": faker.lorem.paragraph(1)
      });
    };

    this.create = function () {
      if (self.numFolders) _.times(self.numFolders, randomFolder);
      if (self.numContacts) _.times(self.numContacts, randomContact);
      if (self.numMails) _.times(self.numMails, randomMail);
      $modalInstance.close(self);
    };

    this.cancel = function () {
      $modalInstance.dismiss('cancel');
    };
  });
