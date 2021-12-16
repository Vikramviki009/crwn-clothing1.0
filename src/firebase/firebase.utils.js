import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAbhr8NWNrvgwNblfgAlfYbgKIWOtkaEzg",
    authDomain: "crwn-db-4986d.firebaseapp.com",
    databaseURL: "https://crwn-db-4986d.firebaseio.com",
    projectId: "crwn-db-4986d",
    storageBucket: "crwn-db-4986d.appspot.com",
    messagingSenderId: "773810867322",
    appId: "1:773810867322:web:3b3fb97e6a77db81dc7fc3",
    measurementId: "G-3QVGN6ZPBQ"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;













