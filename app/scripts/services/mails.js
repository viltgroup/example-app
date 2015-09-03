'use strict';

/**
 * @ngdoc function
 * @name miniumMailApp.service:Mail
 * @description
 * # Mail
 * Service of the miniumMailApp
 */
angular.module('miniumMailApp')
  .factory('Mail', function (repositoryFactory, Contact, Folder, configuration) {
    var randomMail = function () {
      var word = chance.word();
      var contactIds = _.collect(Contact.query(), "id");
      var folderIds = _.collect(Folder.query(), "id");

      return {
        "id": "mail_" + chance.integer({min: 1000}),
        "contact_id": chance.pick(contactIds),
        "tags": _.times(chance.integer({ min: 0, max: 3 }), chance.word.bind(chance)),
        "folders": [ chance.pick(folderIds) ],
        "time": chance.timestamp(),
        "subject": chance.sentence({ words: chance.integer({ min: 1, max: 10 }) }),
        "message": chance.paragraph({ sentences: chance.integer({ min: 1, max: 4 }) })
      };
    };

    return repositoryFactory.create([
      {
        "id": "mail_2139",
        "contact_id": "contact_342",
        "folders": ["inbox"],
        "time": 1334891976104,
        "subject": "Minium Can!",
        "message": "I just found out minium can fill all the forms for me automatically!"
      },
      {
        "id": "mail_2143",
        "contact_id": "contact_377",
        "folders": ["inbox", "later"],
        "tags": [ "important" ],
        "time": 1334884976104,
        "subject": "Minium Execution report for sample-app",
        "message": "All tests passed with success !"
      },
      {
        "id": "mail_2154",
        "contact_id": "contact_399",
        "folders": ["inbox"],
        "tags": [ "important", "minium" ],
        "unread": "true",
        "time": 1334874976199,
        "subject": "Ping",
        "message": "BDD is the way to go! "
      },
      {
        "id": "mail_2203",
        "contact_id": "contact_377",
        "folders": ["later"],
        "tags": [ "important" ],
        "time": 1334874576199,
        "subject": "Mi netus convallis",
        "message": "Egestas morbi at. Curabitur aliquet et commodo nonummy, aliquam quis arcu, sed pellentesque vitae molestie mattis magna, in eget, risus nulla vivamus vulputate"
      },
      {
        "id": "mail_2212",
        "contact_id": "contact_398",
        "folders": ["sent"],
        "time": 1334874579867,
        "subject": "Fusce tristique pretium eros a gravida",
        "message": "Proin malesuada"
      },
      {
        "id": "mail_2021",
        "contact_id": "contact_342",
        "folders": ["trash"],
        "time": 1134874579824,
        "subject": "Phasellus vitae interdum nulla.",
        "message": "Pellentesque quam eros, mollis quis vulputate eget, pellentesque nec ipsum. Cras dignissim fringilla ligula, ac ullamcorper dui convallis blandit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam id nunc ac orci hendrerit faucibus vel in ante. Mauris nec est turpis, ut fringilla mi. Suspendisse vel tortor at nulla facilisis venenatis in sit amet ligula."
      },
      {
        "id": "mail_1976",
        "contact_id": "contact_377",
        "folders": ["trash"],
        "time": 1034874579813,
        "subject": "Fusce tristique pretium :(",
        "message": "aliquam quis arcu."
      }
    ].concat(_.times(configuration.randomMails, randomMail)));
  });
