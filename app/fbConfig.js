import {initializeApp} from "firebase/app"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyCcSN8uF8cfjfhYMDoGU8WlsD1ImBXIXDQ",
    authDomain: "chekov-kf.firebaseapp.com",
    projectId: "chekov-kf",
    storageBucket: "chekov-kf.appspot.com",
    messagingSenderId: "22682078912",
    appId: "1:22682078912:web:1d395fd2ba8d21419b2725"
  };

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app);