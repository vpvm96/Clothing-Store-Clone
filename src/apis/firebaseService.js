import { initializeApp } from "firebase/app"
import { v4 as uuid } from "uuid"
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from "firebase/auth"
import { getDatabase, ref, get, set } from "firebase/database"

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
}

const app = initializeApp(firebaseConfig)
const auth = getAuth()
const provider = new GoogleAuthProvider()
const database = getDatabase()

export function firebaseGoogleLoginService() {
  signInWithPopup(auth, provider).catch(console.error())
}

export function firebaseLogoutService() {
  return signOut(auth)
}

export function firebaseUserStateChange(callback) {
  onAuthStateChanged(auth, async (user) => {
    const updateUser = user ? await firebaseAdminUser(user) : null
    callback(updateUser)
  })
}

export async function firebaseAddNewProduct(product, image) {
  const id = uuid()
  return set(ref(database, `product/${id}`), {
    ...product,
    id,
    price: parseInt(product.price),
    image,
    options: product.options.split(","),
  })
}

async function firebaseAdminUser(user) {
  return get(ref(database, "admins")).then((snapshot) => {
    if (snapshot.exists()) {
      const admins = snapshot.val()
      const isAdmin = admins.includes(user.uid)
      return { ...user, isAdmin }
    }
  })
}

export async function firebaseGetProducts() {
  return get(ref(database, "products")).then((snapshot) => {
    if (snapshot.exists()) {
      return Object.values(snapshot.val())
    }
    return []
  })
}
