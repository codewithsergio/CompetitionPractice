import {initializeApp} from "firebase/app";
import {getFirestore} from '@firebase/firestore';
import {getStorage} from 'firebase/storage';
import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyANqVAIDejHB_5GQxGkj1cPrieGXobvTnc",
  authDomain: "compet-app-6af10.firebaseapp.com",
  projectId: "compet-app-6af10",
  storageBucket: "compet-app-6af10.appspot.com",
  messagingSenderId: "695375483286",
  appId: "1:695375483286:web:e3af88cb630f72aa334db7"
};

const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();
export const signInWithGoogle = (setter) => {
  signInWithPopup(auth, provider)
  .then((result) => {
    const name = result.user.displayName
    const email = result.user.email;
    const id = result.user.uid;

    localStorage.setItem("name", name)
    localStorage.setItem("email", email)
    setter([name, email, id]);
  }).catch((error) => {
    console.log(error);
  });
}
const db = getFirestore(app);
export {db};