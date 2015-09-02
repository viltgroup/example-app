'use strict';

/**
 * @ngdoc function
 * @name miniumMailApp.controller:MailListCtrl
 * @description
 * # MailListCtrl
 * Controller of the miniumMailApp
 */
angular.module('miniumMailApp')
  .controller('MailListCtrl', function (Mail, Folder, $filter, $routeParams) {
    var self = this;
    this.currentFolder = Folder.get($routeParams.currentFolder);
    this.otherFolders = Folder.query()
      .filter(function (f) { return f !== self.currentFolder });
    this.mails = Mail.query();

    this.selectMail = function (mail) {
      self.selectedMail = mail;
    };
    this.remove = function () {
      if (self.currentFolder.id === 'trash') {
        // actually deletes
        Mail.remove(self.selectedMail);
      } else {
        // move to trash
        self.move("trash");
      }
    };
    this.move = function (folder) {
      self.selectedMail.folders = [ folder ];
      Mail.save(self.selectedMail);
      self.selectedMail = null;
    };
  });
