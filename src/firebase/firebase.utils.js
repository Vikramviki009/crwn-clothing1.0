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
};

export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const unsubscribe = auth.onAuthStateChanged(userAuth => {
            unsubscribe();
            resolve(userAuth)
        }, reject)
    })
}

export const addCollectionsAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);
    const batch = firestore.batch();

    objectsToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, obj);
    });

    return await batch.commit();
};

export const convertCollectionsSnapshotToMap = collections => {
    const transformedCollections = collections.docs.map(doc => {
        const { title, items } = doc.data();

        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items
        }
    })
    return transformedCollections.reduce((acc, collection) => {
        acc[collection.title.toLowerCase()] = collection;
        return acc;
    },{})
}

export const GoogleProvider = new firebase.auth.GoogleAuthProvider();
GoogleProvider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(GoogleProvider);

export default firebase;