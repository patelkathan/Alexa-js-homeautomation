# Alexa-js-homeautomation

An example Alexa Skill for Home Automation using the [alexa-app](https://github.com/alexa-js/alexa-app) module with Express.
This app will not let you control your home but you can impliment you own actions on response of Specific Intents. 


## Deploy
### Deploying locally

Make sure you have [Node.js](http://nodejs.org/) and the [Heroku Toolbelt](https://toolbelt.heroku.com/) installed.

```sh
git clone git@github.com:alexa-js/alexa-app-example.git # or clone your own fork
cd alexa-app-example
npm install
npm start
```

Your app should now be running on **[http://localhost:8080/test](http://localhost:8080/test)**. Put it in your browser to access it's test page.

### Deploying to Heroku

```sh
heroku create
git push heroku master
heroku open
```

Alternatively, you can deploy your own copy of the app using this button:

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy?template=https://github.com/kathan565/Alexa-js-homeautomation)

Your app should now be running on **https://`<app-name>`.herokuapp.com/test**, where `<app-name>` is the heroku app name. Put it in your browser to access it's test page.

## Changing the endpoint
Depending on where you deployed your app, the path for the endpoint of the skill should have a path parameter at the end called `/test`. If you want to change that, simply change [this](https://github.com/kathan565/alexa-skill-js/blob/master/index.js#L8) line to your desired name.

## Changing the Application id
You have to change your alexa skill's application id in [this](https://github.com/kathan565/Alexa-js-homeautomation/blob/master/package.json#L11) package.json file 
