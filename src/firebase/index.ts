import { initializeApp } from 'firebase/app'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyAGJ7luHyZBr-UPWPbmvCkaH6gwrcY-0Qg',
  authDomain: 'epic-clone.firebaseapp.com',
  projectId: 'epic-clone',
  storageBucket: 'epic-clone.appspot.com',
  messagingSenderId: '1061874271409',
  appId: '1:1061874271409:web:6cdaff7c9d2f99bb8dce90',
  measurementId: 'G-HXKW7S53JS',
}

export const firebaseApp = initializeApp(firebaseConfig)
export const db = getFirestore(firebaseApp)
export const auth = getAuth(firebaseApp)
onAuthStateChanged(auth, (user: any) => {
  // Check for user status
  console.log(user)
})
