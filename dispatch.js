'use strict';

const orderCoffee = require('./comprarCerva/comprarCerva');
const greetUser = require('./greetUser');

module.exports = function(intentRequest) {
  //console.log(`dispatch userId=${intentRequest.userId}, intentName=${intentRequest.currentIntent.name}`);
  const intentName = intentRequest.currentIntent.name;

  //console.log(intentName + ' foi chamado');
  if (intentName === 'Pedido') {
    console.log('entrando no pedido');
    return orderCoffee(intentRequest);
  }

  if (intentName === 'GreetingIntent') {
    console.log('entrando no greetuser');
    return greetUser(intentRequest);
  }

  throw new Error(`Intent with name ${intentName} not supported`);
};
