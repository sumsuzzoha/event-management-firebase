// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey:import.meta.env.VITE_APIKEY,
//   authDomain:import.meta.env.VITE_AUTHDOMAIN,
//   projectId:import.meta.env.VITE_PROJECTID,
//   storageBucket:import.meta.env.VITE_STORAGEBUCKET,
//   messagingSenderId:import.meta.env.VITE_MESSAGINGSENDERID,
//   appId:import.meta.env.VITE_APPID,
// };

const firebaseConfig = {
    apiKey: "AIzaSyAw2eMjXsgbefJ1lmb8Owrm3J4sWXRVP7c",
    authDomain: "digi-session-event.firebaseapp.com",
    projectId: "digi-session-event",
    storageBucket: "digi-session-event.appspot.com",
    messagingSenderId: "901093333008",
    appId: "1:901093333008:web:72dcc89249ac84407b5295"
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
