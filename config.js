import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyCKdkOGf2TPyBWG2fRUXpQxbIJbvE81n3Q",
  authDomain: "e-library-app-df738.firebaseapp.com",
  projectId: "e-library-app-df738",
  storageBucket: "e-library-app-df738.appspot.com",
  messagingSenderId: "272165320098",
  appId: "1:272165320098:web:c43861588b1eef1268aefb"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
