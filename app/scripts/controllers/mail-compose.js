'use strict';

/**
 * @ngdoc function
 * @name miniumMailApp.controller:MailComposeCtrl
 * @description
 * # MailComposeCtrl
 * Controller of the miniumMailApp
 */
angular.module('miniumMailApp')
  .controller('MailComposeCtrl', function (Contact, Mail, $modalInstance, mailForm, configuration) {
    this.mailForm = mailForm;
    this.contacts = Contact.query();
    this.useHtml5FileUpload = configuration.useHtml5FileUpload;
    this.matchingContacts = function (query) {
      return Contact.query()
        .map(function (c) {
          return { text: c.firstName + ' ' + c.lastName, id: c.id };
        })
        .filter(function (t) { return t.text.toLowerCase().indexOf(query.toLowerCase())  !== -1 })
    };

    this.attach = function (elem) {
      if (elem && elem.length >= 1) {
        this.mailForm.attachment = elem[0].name;
        console.log(this.mailForm);
      }
    };

    this.send = function () {
      var mail = {
        folders: [ 'sent' ],
        contact_id: mailForm.recipients,
        subject: mailForm.subject,
        message: mailForm.message,
        attachment: mailForm.attachment,
        time: new Date().getTime()
      };
      mail = Mail.save(mail);
      $modalInstance.close(mail);
    };

    this.cancel = function () {
      $modalInstance.dismiss('cancel');
    };
  });
