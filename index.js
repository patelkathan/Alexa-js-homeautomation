var express = require("express");
var alexa = require("alexa-app");

var PORT = process.env.PORT || 8080;
var app = express();

// ALWAYS setup the alexa app and attach it to express before anything else.
var alexaApp = new alexa.app("test");
alexaApp.id = require('./package.json').alexa.applicationId;


alexaApp.express({
  expressApp: app,
  //router: express.Router(),

  // verifies requests come from amazon alexa. Must be enabled for production.
  // You can disable this if you're running a dev environment and want to POST
  // things to test behavior. enabled by default.
  checkCert: false,

  // sets up a GET route when set to true. This is handy for testing in
  // development, but not recommended for production. disabled by default
  debug: true
});

// now POST calls to /test in express will be handled by the app.request() function

// from here on you can setup any other express routes or middlewares as normal
app.set("view engine", "ejs");

alexaApp.launch(function(request, response) {
  response.say("You launched the app!");
});

// Here deviceslot,locationslot,stateslot are SLOTS Defined in Alexa Skills Console

alexaApp.intent('Control', {
  "slots": { "deviceslot": "LITERAL","locationslot": "LITERAL","stateslot": "LITERAL" },
  "utterances": ["{Turn} {kitchen|master bed|living|locationslot} {tv|lights|fan|door|light|deviceslot} {on|off|stateslot} ","{Turn} {on|off|stateslot} {kitchen|master bed|living|locationslot} room {tv|lights|fan|door|light|deviceslot}","{Turn} {on|off|stateslot} {kitchen|master bed|living|locationslot} {tv|lights|fan|door|light|deviceslot}"]
}, function(request, response) {
    response.say('Turned '+ request.slot('locationslot') + ' ' + request.slot('deviceslot') +' '+ request.slot('stateslot'));
});

app.listen(PORT, () => console.log("Listening on port " + PORT + "."));