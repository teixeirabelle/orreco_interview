"use strict";

module.exports = function (environment) {
  let ENV = {
    modulePrefix: "interview-project",
    environment,
    rootURL: "/",
    locationType: "auto",
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. EMBER_NATIVE_DECORATOR_SUPPORT: true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false,
      },
    },

    firebase: {
      apiKey: "AIzaSyBglhVOOtVa1j-x0J9b3gHBGA5JCkRVaME",
      authDomain: "orreco-interview.firebaseapp.com",
      projectId: "orreco-interview",
      storageBucket: "orreco-interview.appspot.com",
      messagingSenderId: "729060634605",
      appId: "1:729060634605:web:9ba0f4891a5a4c34a0c1e4",
      measurementId: "G-L23ZRY12N8",
    },

    // firebase: {
    //   apiKey: process.env.FIREBASE_API_KEY,
    //   authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    //   databaseURL: process.env.FIREBASE_DATABASE_URL,
    //   projectId: process.env.FIREBASE_PROJECT_ID,
    //   storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    //   messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    //   appId: process.env.FIREBASE_APP_ID,
    //   measurementId: process.env.FIREBASE_MEASUREMENT_ID,
    //   env: process.env.GCLOUD_PROJECT
    // },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
  };

  console.log("im here");
  console.log("env", environment);
  console.log("firebase", ENV.firebase);

  if (environment === "development") {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === "test") {
    // Testem prefers this...
    ENV.locationType = "none";

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = "#ember-testing";
    ENV.APP.autoboot = false;
  }

  if (environment === "production") {
    // here you can enable a production-specific feature
  }

  return ENV;
};
