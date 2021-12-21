import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

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

export const createUserProfileDocument = async (userAuth, additionalDetails) => {
    if(!userAuth) return;

    const userRef = await firestore.doc(`users1.0/${userAuth.uid}`);
    const snapshot = await userRef.get();

    if(!snapshot.exists){
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalDetails
            })
        } catch (error) {
            console.log('error creating user', error.messagingSenderId())
        }
    }

    return userRef;
}

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;