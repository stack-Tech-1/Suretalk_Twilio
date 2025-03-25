const admin = require("firebase-admin");

const serviceAccount = JSON.parse(process.env.FIREBASE_CONFIG || "{}");
console.log("Service Account:", serviceAccount);


admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: "suretalkdb.appspot.com" // 🔹 Use ".appspot.com" instead

});

const storage = admin.storage().bucket();

module.exports = { storage };
