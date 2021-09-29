import firebase from 'firebase/app';
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyD08-XZN4D2gWNluXjHrCvbGZ0h-PRLjhg",
    authDomain: "chatroom-515a2.firebaseapp.com",
    projectId: "chatroom-515a2",
    storageBucket: "chatroom-515a2.appspot.com",
    messagingSenderId: "606500572914",
    appId: "1:606500572914:web:995a17a0900d1a05e38a6b"
  }).auth();