import firebase from 'firebase/app'
import firebaseui from 'firebaseui'
import 'firebase/firestore'

const config = {
  apiKey: "AIzaSyB7HfgLVDZZ0sF9cihRzLeKcdQ3T1bsCRQ",
  authDomain: "hack-a-vote.firebaseapp.com",
  databaseURL: "https://hack-a-vote.firebaseio.com",
  projectId: "hack-a-vote",
  storageBucket: "hack-a-vote.appspot.com",
  messagingSenderId: "94674440262"
}

export const FBApp = firebase.initializeApp(config)
export const FBUIApp = new firebaseui.auth.AuthUI(firebase.auth(FBApp))
export const FBFirestore = firebase.firestore()