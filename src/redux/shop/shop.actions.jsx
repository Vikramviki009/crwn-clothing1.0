import { convertCollectionsSnapshotToMap, firestore } from "../../firebase/firebase.utils";
import ShopActionTypes from "./shop.types";

export const updateCollections = collections => ({
    type: ShopActionTypes.UPDATE_COLLECTIONS,
    payload: collections
})

export const fetchCollectionsStart = () => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_START
});

export const fetchCollectionsSuccess = (collections) => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collections
});

export const fetchCollectionsFailure = error => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: error
});

export const fetchCollectionsStartAsync = () => {
    return dispatch => {
        const collectionRef = firestore.collection('collections1.0');
        dispatch(fetchCollectionsStart());

        collectionRef.get().then(snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            dispatch(fetchCollectionsSuccess(collectionsMap))
        }).catch(error => dispatch(fetchCollectionsFailure(error.message)))
    }
}