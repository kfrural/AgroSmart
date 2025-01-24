import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"; 

const firebaseConfig = {
  apiKey: "AIzaSyCe8S7yaNSMEouPCdkeei4cnYWf4pB_8cY",
  authDomain: "agrosmart-92626.firebaseapp.com",
  projectId: "agrosmart-92626",
  storageBucket: "agrosmart-92626.firebasestorage.app",
  messagingSenderId: "298352517529",
  appId: "1:298352517529:web:10065fa23ff29f00d3b308",
  measurementId: "G-ZY63P69V5S"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, analytics, auth, storage };