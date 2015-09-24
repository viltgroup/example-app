'use strict';

/**
 * @ngdoc function
 * @name miniumMailApp.controller:MailListCtrl
 * @description
 * # MailListCtrl
 * Controller of the miniumMailApp
 */
angular.module('miniumMailApp')
  .controller('MailListCtrl', function (Mail, Folder, $filter, $routeParams, loading) {
    var self = this;
    this.currentFolder = Folder.get($routeParams.currentFolder);
    this.folders = Folder.query();
    this.mails = Mail.query();

    this.toggleSelectedMail = function (mail) {
      self.selectedMail = self.selectedMail === mail ? null : mail;
    };
    this.remove = function () {
      if (self.currentFolder.id === 'trash') {
        // actually deletes
        Mail.remove(self.selectedMail);
      } else {
        // move to trash
        self.move("trash");
      }
      loading.show();
    };
    this.move = function (folder) {
      self.selectedMail.folders = [ folder ];
      Mail.save(self.selectedMail);
      self.selectedMail = null;

      loading.show()
    };
  });
