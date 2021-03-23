import firebase from 'firebase'
require('@firebase/firestore')
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyB4_Kciw2lS0RYpf_vkcJZeg3IrcnralhA",
    authDomain: "book-santa-32e47.firebaseapp.com",
    projectId: "book-santa-32e47",
    storageBucket: "book-santa-32e47.appspot.com",
    messagingSenderId: "499897194309",
    appId: "1:499897194309:web:0d459f584769ffa11f102c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore()
  