'use strict';

const databaseManager = require('../databaseManager');

module.exports = function(item_userID, item_cervejaTipo, item_cervejaTamanho) {
  console.log(item_userID + ' ' + item_cervejaTipo + ' ' + item_cervejaTamanho);

  databaseManager.saveUserToDatabase(item_userId, item_cervejaTipo, item_cervejaTamanho).then(item => {
    console.log(item);
  });
};
