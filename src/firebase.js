import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyARyOKKmrlcEQ2in6OQIIevePpjMLgSg_o",
        authDomain: "clone-a0ee9.firebaseapp.com",
        databaseURL: "https://clone-a0ee9.firebaseio.com",
        projectId: "clone-a0ee9",
        storageBucket: "clone-a0ee9.appspot.com",
        messagingSenderId: "462683677307",
        appId: "1:462683677307:web:892d4b383089ea166eb8de",
        measurementId: "G-7Y73WEQYP3"     
});

const db = firebaseApp.firestore();
const auth = firebase.auth();


export { db, auth };