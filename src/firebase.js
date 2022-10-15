import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBxRaUornhlDweE98PHf3vLT3_gk8wBoww',
  authDomain: 'netflix-clone-2f112.firebaseapp.com',
  projectId: 'netflix-clone-2f112',
  storageBucket: 'netflix-clone-2f112.appspot.com',
  messagingSenderId: '1092011160811',
  appId: '1:1092011160811:web:9e597eb45f6d04dfab7aae',
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
export { auth };
export default db;
