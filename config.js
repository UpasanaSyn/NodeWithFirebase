
'use strict';
const dotenv = require('dotenv');
const assert = require('assert');

dotenv.config();
// console.log("------INSIDE CONFIG-----------");
// console.log("--DATABASE_URL-----------", process.env);
const {
    PORT,
    HOST,
    HOST_URL,
    API_KEY,
    AUTH_DOMAIN,
    DATABASE_URL,
    PROJECT_ID,
    STORAGE_BUCKET,
    MESSAGING_SENDER_ID,
    APP_ID
} = process.env;

assert(PORT, 'PORT is required');
assert(HOST, 'HOST is required');


module.exports = {
    port: PORT,
    host: HOST,
    url: HOST_URL,
    firebaseConfig: {
        apiKey: API_KEY,
        authDomain: AUTH_DOMAIN,
        databaseURL: DATABASE_URL,
        projectId: PROJECT_ID,
        storageBucket: STORAGE_BUCKET,
        messagingSenderId: MESSAGING_SENDER_ID,
        appId: APP_ID
        
      }
      
}














// <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="https://www.gstatic.com/firebasejs/8.2.9/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->

// <script>
//   // Your web app's Firebase configuration
//   var firebaseConfig = {
//     apiKey: "AIzaSyB6CGfVrfSbXkvSE6nFJez906940KNEni8",
//     authDomain: "nodewithfirebase-fc709.firebaseapp.com",
//     projectId: "nodewithfirebase-fc709",
//     storageBucket: "nodewithfirebase-fc709.appspot.com",
//     messagingSenderId: "49182060946",
//     appId: "1:49182060946:web:300f8976537a7b5ae2514b"
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
// </script>
