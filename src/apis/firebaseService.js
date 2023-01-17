import { initializeApp } from "firebase/app"
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from "firebase/auth"

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
}

const app = initializeApp(firebaseConfig)
const auth = getAuth()
const provider = new GoogleAuthProvider()

export function firebaseGoogleLoginService() {
  signInWithPopup(auth, provider).catch(console.error())
}

export function firebaseLogoutService() {
  return signOut(auth)
}

export function firebaseUserStateChange(callback) {
  onAuthStateChanged(auth, (user) => {
    callback(user)
  })
}
