const lexResponses = require('./lexResponses');

module.exports = function(intentRequest) {
  const source = intentRequest.invocationSource;
  console.log('source = ' + source);
console.log('greetUser.js');
  if (source === 'FulfillmentCodeHook') {
    console.log('entrando no fulfillmentcodehook');
    return Promise.resolve(lexResponses.close(intentRequest.sessionAttributes, 'Fulfilled', null));
  }

  if (source === 'DialogCodeHook') {
    console.log('entrando no DialogCodeHook');
    return Promise.resolve(lexResponses.confirmIntent(intentRequest.sessionAttributes, 'GreetingIntent', null));
  }
};
