import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import {
  getDatabase,
  set,
  ref,
  onValue,
  update,
  remove,
} from "firebase/database";

import {
  toastErrorNotify,
  toastSuccessNotify,
  toastWarnNotify,
} from "./ToastNotify";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  databaseURL: process.env.REACT_APP_databaseURL,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export const createUser = async (email, password, navigate) => {
  try {
    let userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    await updateProfile(auth.currentUser, {
      email: email,
    });
    toastSuccessNotify("Registered successfully!");
    navigate("/");
    console.log(userCredential);
  } catch (error) {
    toastErrorNotify(error.message);
    console.log(error.message);
  }
};
export const signIn = async (email, password, navigate) => {
  try {
    let userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    navigate("/");
    toastSuccessNotify("Login Successfully!");

    // console.log(userCredential);
  } catch (error) {
    toastErrorNotify(error.message);
    console.log(error);
  }
};

export const userObserver = (setCurrentUser) => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setCurrentUser(user);
    } else {
      setCurrentUser(false);
    }
  });
};

export const logOut = (navigate) => {
  signOut(auth);
  navigate("/");
  toastSuccessNotify("Logged out See You Soon!");
};
export const signUpProvider = (navigate) => {
  const provider = new GoogleAuthProvider();

  signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result);
      toastSuccessNotify("Login Successfully!");
      // navigate("/");
    })
    .catch((error) => {
      toastErrorNotify(error.message);
      console.log(error);
    });
};
//* 1.step send data to db;
export const db = getDatabase(app);

export const writeNewBlog = (id, title, imageUrl, content, email) => {
  const db = getDatabase();
  set(ref(db, `/${id}`), {
    id: id,
    title: title,
    imageUrl: imageUrl,
    content: content,
    email: email,
  });
};

//*2. step  Read by ytube...

export const readData = (setBlogData) => {
  onValue(ref(db), (snapshot) => {
    setBlogData([]);
    const data = snapshot.val();
    // console.log(data);
    if (data !== null) {
      Object.values(data).map((item) => {
        setBlogData((oldArray) => [...oldArray, item]);
      });
    }
  });
};

//*step Update Data;

export const updateData = (id, title, imageUrl, content, email) => {
  const db = getDatabase();
  update(ref(db, `/${id}`), {
    id: id,
    title: title,
    imageUrl: imageUrl,
    content: content,
    email: email,
  });
};

export const deleteData = (id, title, imageUrl, content, email) => {
  const db = getDatabase();
  remove(ref(db, `/${id}`), {
    id: id,
    title: title,
    imageUrl: imageUrl,
    content: content,
    email: email,
  });
};
