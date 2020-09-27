'use strict';

const dispatch = require('./dispatch');
const userFavorites = require('./userFavorites/userFavorites');


console.log('handler.js');
module.exports.intents = (event, context, callback) => {
  try {
    //console.log(`event.bot.name=${event.bot.name}`);
    dispatch(event).then(response => {
      callback(null, response);
      console.log('entrando no dispatch');
    });
  } catch (err) {
    callback(err);
  }
};


module.exports.saveUserFavorites = (event, context, callback) => {
  //console.log('saveUserFavorites lambda called');
  //console.log('new log');
  console.log('entrando no userfav');

  var item_userID = event.userId;
  //console.log(item_userID);
  var item_cervejaTipo = event.currentIntent.slots.cervaTipo;
  //console.log(item_cervejaTipo);
  var item_cervejaTamanho = event.currentIntent.slots.cervejaTamanho;
  //console.log(item_cervejaTamanho);
try{
  userFavorites(item_userID, item_cervejaTipo, item_cervejaTamanho).then(response => {
  callback(null, response); });}
  catch (err) {
    callback(err);
  }
};