
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDT8HpnPMfEM0Nd62cF6xhAkoiHW7AU9iE",
    authDomain: "clone-react-cff1d.firebaseapp.com",
    databaseURL: "https://clone-react-cff1d-default-rtdb.firebaseio.com",
    projectId: "clone-react-cff1d",
    storageBucket: "clone-react-cff1d.appspot.com",
    messagingSenderId: "139051215248",
    appId: "1:139051215248:web:3776985c0eb00e3c27ab15",
    measurementId: "G-B7R0TR04MH"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();
export { db,auth,storage,provider };