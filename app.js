require('dotenv').config();
var firebase = require("firebase");

firebase.initializeApp({
  serviceAccount: process.env.FIREBASE_SERVICE_ACCOUNT,
  databaseURL: process.env.FIREBASE_DATABASE_URL
});

var db = firebase.database();
var ref = db.ref("/");

// ref.once("value", function(snapshot) {
//   console.log(JSON.stringify(snapshot.val()) );
// });

ref.on("child_changed" , function(snapshot){
    console.log(snapshot.key);
    console.log(snapshot.child);
    console.log(JSON.stringify(snapshot.val()) );
});