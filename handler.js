'use strict';

const dispatch = require('./dispatch');
const userFavorites = require('./userFavorites/userFavorites');

module.exports.intents = (event, context, callback) => {
  try {
    console.log(`event.bot.name=${event.bot.name}`);
    dispatch(event).then(response => {
      callback(null, response);
    });
  } catch (err) {
    callback(err);
  }
};

module.exports.saveUserFavorites = (event, context, callback) => {
  console.log('saveUserFavorites lambda called');
  console.log(event);

  var item_userID = event.userId;
  console.log(item_userID);
  var item_cervejaTipo = event.currentIntent.slots.cervaTipo;
  console.log(item_cervejaTipo);
  var item_cervejaTamanho = event.currentIntent.slots.cervejaTamanho;
  console.log(item_cervejaTamanho);
  

  userFavorites(item_userID.S, item_cervejaTipo.S, item_cervejaTamanho.S);
  callback(null, null);
};