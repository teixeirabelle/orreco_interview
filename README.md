# Interview Project

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with npm)
* [Ember CLI](https://ember-cli.com/)

## Installation

* `git clone <repository-url>` this repository
* `cd interview-project`
* `npm install`
* Create .env file with provided Firebase details.

## Running / Development

* `source .env`
* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Firebase Project
* Project name: orreco-interview
* 3 collections in the Firestore database: athletes, sleeps & wellnessLogs.
* All collections can be read without user authentication.
* Writing to database is disabled. 

## Ember Project
* Skeleton ember app with a few additional packages installed:
  * [emberfire](https://github.com/FirebaseExtended/emberfire) - to interact with Firestore database.
  * [ember-fontawesome](https://github.com/FortAwesome/ember-fontawesome) - to have some icons to use.
  * [ember-animated](https://github.com/ember-animation/ember-animated) - if animations are needed.
  * [ember-moment](https://github.com/adopted-ember-addons/ember-moment) - for dates.
* Also includes a few example code snippets:
  * Data retrieving examples shown in routes/application.js file. 
  * Model examples shown in models/athlete.js & models.sleep.js files.
  * Basic rendering shown in templates/application.hbs file. 

## Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
* [Firestore](https://firebase.google.com/docs/firestore)




