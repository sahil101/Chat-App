const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();
exports.MyFunction = functions.firestore
  .document("chat/{message}")
  .onWrite((snapshot, context) => {
    console.log(snapshot.data());
    return admin.messaging().sendToTopic("chat", {
      notification: {
        title: snapshot.data().username,
        body: snapshot.data().text,
        clickAction: "FLUTTER     _NOTIFICATION_CLICK",
      },
    });
  });
