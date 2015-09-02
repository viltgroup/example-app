'use strict';

/**
 * @ngdoc function
 * @name miniumMailApp.controller:MailListCtrl
 * @description
 * # MailListCtrl
 * Controller of the miniumMailApp
 */
angular.module('miniumMailApp')
  .controller('MailListCtrl', function ($filter, $routeParams) {
    var self = this;
    this.currentFolder = data.folders.filter(function (f) { return f.id === $routeParams.currentFolder })[0];
    this.mails = data.mails;
    this.otherFolders = data.folders
      .filter(function (f) { return f !== self.currentFolder });

    this.selectMail = function (mail) {
      self.selectedMail = mail;
    };
    this.remove = function () {
      if (self.currentFolder.id === 'trash') {
        // actually deletes
        self.mails.splice(data.mails.indexOf(self.selectedMail), 1);
      } else {
        // move to trash
        self.move("trash");
      }
    };
    this.move = function (folder) {
      self.selectedMail.folders = [ folder ];
    };
    this.forward = function () {

    };
    this.reply = function () {

    };
  });
