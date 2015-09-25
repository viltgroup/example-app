'use strict';

/**
 * @ngdoc function
 * @name miniumMailApp.controller:RandomGeneratorFormCtrl
 * @description
 * # ConfigurationFormCtrl
 * Controller of the miniumMailApp
 */
angular.module('miniumMailApp')
  .controller('RandomGeneratorFormCtrl', function ($modalInstance, Folder, Contact, Tag, Mail) {
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
    var randomTag = function () {
      Tag.save({
        "id": faker.lorem.words(1)[0],
        "color": faker.random.arrayElement([ "#337ab7", "#5cb85c", "#5bc0de", "#5bc0de", "#d9534f" ])
      });
    };
    var randomMail = function () {
      var contactIds = _.collect(Contact.query(), "id");
      var folderIds = _.collect(Folder.query(), "id");
      var tags = _.collect(Tag.query(), "id");

      Mail.save({
        "id": "mail_" + faker.random.number({min: 1000}),
        "contact_id": faker.random.arrayElement(contactIds),
        "tags": [ faker.random.arrayElement(tags) ],
        "folders": [ faker.random.arrayElement(folderIds) ],
        "time": faker.date.past().getTime(),
        "subject": faker.lorem.sentence(3, 10),
        "message": faker.lorem.paragraph(1)
      });
    };

    this.create = function () {
      if (self.numFolders) _.times(self.numFolders, randomFolder);
      if (self.numContacts) _.times(self.numContacts, randomContact);
      if (self.numTags) _.times(self.numTags, randomTag);
      if (self.numMails) _.times(self.numMails, randomMail);
      $modalInstance.close(self);
    };

    this.cancel = function () {
      $modalInstance.dismiss('cancel');
    };
  });
