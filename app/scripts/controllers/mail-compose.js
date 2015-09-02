'use strict';

/**
 * @ngdoc function
 * @name miniumMailApp.controller:MailComposeCtrl
 * @description
 * # MailComposeCtrl
 * Controller of the miniumMailApp
 */
angular.module('miniumMailApp')
  .controller('MailComposeCtrl', function ($modalInstance, mailForm) {
    this.mailForm = mailForm;
    this.contacts = data.contacts;

    this.matchingContacts = function (query) {
      return data.contacts
        .map(function (c) {
          return { text: c.firstName + ' ' + c.lastName, id: c.id };
        })
        .filter(function (t) { return t.text.toLowerCase().indexOf(query.toLowerCase())  !== -1 })
    };

    this.send = function () {
      var timestamp = Date.now ? Date.now() : new Date().getTime();
      var mail = {
        id: 'mail_' + timestamp,
        folders: [ 'sent' ],
        contact_id: mailForm.recipients,
        subject: mailForm.subject,
        message: mailForm.message,
        time: timestamp
      };
      data.mails.push(mail);
      $modalInstance.close(mail);
    };

    this.cancel = function () {
      $modalInstance.dismiss('cancel');
    };
  });
