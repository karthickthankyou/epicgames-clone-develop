import { createAsyncThunk } from '@reduxjs/toolkit'
import { SigninInfo, SignupInfo } from 'src/types'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut as firebaseSignout,
  sendPasswordResetEmail,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth'
import { auth } from 'src/firebase'

// Wrap the functions with createAsyncThunk to include them within the redux flow. We dont have to wrap these functions with try catch as we handle with in extra reducers.
export const signup = createAsyncThunk(
  'user/signup',
  async ({ email, password, displayName }: SignupInfo) => {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    )
    const { user } = userCredential
    if (displayName) updateProfile(user, { displayName })
  }
)

export const signin = createAsyncThunk(
  'user/signin',
  async ({ email, password }: SigninInfo) => {
    await signInWithEmailAndPassword(auth, email, password)
  }
)

export const signout = createAsyncThunk('user/signout', async () => {
  await firebaseSignout(auth)
})

export const forgotPassword = createAsyncThunk(
  'user/forgotPassword',
  async (email: string) => {
    await sendPasswordResetEmail(auth, email)
  }
)

export const googleSignin = createAsyncThunk('user/googleSignin', async () => {
  await signInWithPopup(auth, new GoogleAuthProvider())
})