import { initializeApp } from 'firebase/app';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithRedirect,
  getRedirectResult,
} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const config = {
  apiKey: 'AIzaSyCuiI7rvW3sSNmrolh0vL8OQu6dV07SExE',
  authDomain: 'crown-db-4aa1e.firebaseapp.com',
  projectId: 'crown-db-4aa1e',
  storageBucket: 'crown-db-4aa1e.appspot.com',
  messagingSenderId: '100577361261',
  appId: '1:100577361261:web:ce4a0d6a7d7d9dcf956e64',
};

const app = initializeApp(config);
const auth = getAuth(app);
const firestore = getFirestore(app);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });

// signInWithGoogle function
export const signInWithGoogle = async () => {
  try {
    await signInWithRedirect(auth, provider);
    // Redirect to Google sign-in page, and handle the result in your authentication flow
  } catch (error) {
    console.error('Error signing in with Google:', error);
    throw error;
  }
};

// Handle the result of the Google sign-in redirect
export const handleSignInRedirect = async () => {
  try {
    const result = await getRedirectResult(auth);
    if (result.user) {
      // User is signed in. You can handle the user data here.
      return result.user;
    }
  } catch (error) {
    console.error('Error handling Google sign-in redirect:', error);
    throw error;
  }
};

export { auth, firestore, provider };
export default app;
