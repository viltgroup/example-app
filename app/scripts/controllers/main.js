'use strict';

/**
 * @ngdoc function
 * @name miniumMailAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the miniumMailAppApp
 */
angular.module('miniumMailApp')
  .controller('MainCtrl', function ($routeParams, $modal,loading) {
    this.currentFolder = $routeParams.currentFolder;

    loading.hide();

    this.openComposeWindow = function(mailForm) {
      var modalInstance = $modal.open({
        templateUrl: 'views/mail-compose.html',
        controller: 'MailComposeCtrl',
        controllerAs: 'mailCompose',
        size: 'lg',
        resolve: {
          mailForm: function () {
            return mailForm || {};
          }
        }
      });
      modalInstance.result.then(function (mail) {
        console.log("Mail sent:", mail);
        loading.show();
      });
    };

    this.openForwardWindow = function (mail) {
      return this.openComposeWindow({
        subject: 'Fw: ' + mail.subject,
        message: '  \n---------- Forwarded message ----------\n' + mail.message
      })
    };

    this.openReplyWindow = function (mail) {
      console.log(mail)
      return this.openComposeWindow({
        subject: 'Re: ' + mail.subject,
        recipients: mail.contact_id
        // recipients: data.contacts
        //   .filter(function (c) { return c.id === mail.contact_id })
        //   .map(function (c) {
        //     return { text: c.firstName + ' ' + c.lastName, id: c.id }
        //   })
      })
    };
  });
