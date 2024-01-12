// Download the helper library from https://www.twilio.com/docs/node/install
// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure
const accountSid = 'AC732b197e8a000b5c2060d6c36549fefd';
const authToken = '884dad946c2086f99e404ede69224208';
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: 'We have t',
     from: 'whatsapp:+14155238886',
     to: 'whatsapp:+263786936437'
   })
  .then(message => console.log(message.sid));