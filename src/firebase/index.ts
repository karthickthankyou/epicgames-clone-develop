import { initializeApp } from 'firebase/app'

import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

export const firebaseConfig = {
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

// enableIndexedDbPersistence(db)
//   .then((res) => console.log('enableIndexedDbPersistence success.'))
//   .catch((err) => {
//     console.log('enableIndexedDbPersistence failed: ', err)

//     if (err.code === 'failed-precondition') {
//       // Multiple tabs open, persistence can only be enabled
//       // in one tab at a a time.
//       // ...
//     } else if (err.code === 'unimplemented') {
//       // The current browser does not support all of the
//       // features required to enable persistence
//       // ...
//     }
//   })
// Subsequent queries will use persistence, if it was enabled successfully

export const collections = {
  USERS: 'users',
  GAMES: 'games',
  GAME_DETAILS: 'gameDetails',
  USER_GAMES: 'userGames',
  GAMES_SIMILAR: 'gamesSimilar',
  PUBLISHERS: 'publishers',
  USER_ACTIVITIES: 'userActivities',
  CART: 'cart',
}
onAuthStateChanged(auth, (user: any) => {
  // Check for user status
  // console.log(user)
})
