import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCbNcF9i5PQr6bDYdB3aBcMghbVLruHfTw",
    authDomain: "todolist-app-c1d74.firebaseapp.com",
    projectId: "todolist-app-c1d74",
    storageBucket: "todolist-app-c1d74.appspot.com",
    messagingSenderId: "279470433754",
    appId: "1:279470433754:web:98d00e9dd3439a4bcb4ce3"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  export {db};