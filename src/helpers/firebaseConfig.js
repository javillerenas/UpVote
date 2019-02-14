import firebase from 'firebase/app'
import firebaseui from 'firebaseui'
import 'firebase/firestore'

export const FBApp = firebase.initializeApp(config)
export const FBUIApp = new firebaseui.auth.AuthUI(firebase.auth(FBApp))
export const FBFirestore = firebase.firestore()
