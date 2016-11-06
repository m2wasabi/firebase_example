require('dotenv').config();
var firebase = require("firebase");

firebase.initializeApp({
  serviceAccount: process.env.FIREBASE_SERVICE_ACCOUNT,
  databaseURL: process.env.FIREBASE_DATABASE_URL
});
