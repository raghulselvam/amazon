//npm install -g firebase-tools
import firebase from "firebase"
const firebaseConfig = {
    apiKey: "AIzaSyCX5qnAsd2hnhuLcO-JWqjfcWbVUVRVQ3M",
    authDomain: "fir-a3dca.firebaseapp.com",
    projectId: "fir-a3dca",
    storageBucket: "fir-a3dca.appspot.com",
    messagingSenderId: "431972824740",
    appId: "1:431972824740:web:53b75e699d67ec05901831",
    measurementId: "G-VP74BC8FM2"
  };
  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  export {db,auth};
