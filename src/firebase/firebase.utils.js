import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: 'AIzaSyDRWhCF6ec92JCFmhfp7Os4B5TtqupWxd0',
    authDomain: 'crw-db-11cd8.firebaseapp.com',
    projectId: 'crw-db-11cd8',
    storageBucket: 'crw-db-11cd8.appspot.com',
    messagingSenderId: '1047336801456',
    appId: '1:1047336801456:web:4e057ce38fce7383dc1775',
}

if (!firebase.apps.length) {
    firebase.initializeApp(config)
} else {
    firebase.app() // if already initialized, use that one
}

export const auth = firebase.auth()
export const firestore = firebase.firestore()
const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return
    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get()

    if (!snapShot.exists) {
        const { displayName, email } = userAuth
        const createdAt = new Date()
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData,
            })
        } catch (e) {
            console.log('ERROR: Creating User: ', e)
        }
    }
    return userRef
}

export const addCollectionAndDocuments = async (collectionKey, objectToAdd) => {
    const collectionRef = firestore.collection(collectionKey)

    const batch = firestore.batch()
    objectToAdd.forEach((obj) => {
        const newDocRef = collectionRef.doc()
        batch.set(newDocRef, obj)
        console.log(newDocRef, 'obj', obj)
    })
    return await batch.commit()
}

export default firebase
