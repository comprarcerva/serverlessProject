'use strict';

const databaseManager = require('../databaseManager');
//const manageFullfilmentCerva = require('../.comprarCerva/manageFullfilmentCerva');

module.exports = function(item_userID, item_cervejaTipo, item_cervejaTamanho) {
  //console.log(item_userID + ' ' + item_cervejaTipo + ' ' + item_cervejaTamanho);

 return databaseManager.saveUserToDatabase(item_userID, item_cervejaTipo, item_cervejaTamanho).then(item => {
    //console.log(item);
  });
};

//return manageFullfilmentCerva.fullfilOrder(intentRequest.userId,intentRequest.ListaBrejas,intentRequest.cervejaTamanho);