import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {
  toastErrorNotify,
  toastSuccessNotify,
  toastWarnNotify,
} from "../helpers/ToastNotify";
const firebaseConfig = {
  apiKey: "AIzaSyAsqRw-uEvLgqde3yk8kMzJcKIAZSDqFFE",
  authDomain: "fireblog-a1271.firebaseapp.com",
  databaseURL:
    "https://fireblog-a1271-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "fireblog-a1271",
  storageBucket: "fireblog-a1271.appspot.com",
  messagingSenderId: "971708873582",
  appId: "1:971708873582:web:d27a8315eeb4fd7837df7f",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export const createUser = async (auth, email, password) => {
  try {
    let userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    toastSuccessNotify("Registered successfully!");
    //    navigate('/');
    console.log(userCredential);
  } catch (error) {
    toastErrorNotify(error.message);
  }
};
