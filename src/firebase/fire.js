import firebase from "firebase/";
import "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCH2Vq0w_3ct5PvxDE9Az-7i8n6v75Vz08",
  authDomain: "hackaton-sgemor.firebaseapp.com",
  projectId: "hackaton-sgemor",
  storageBucket: "hackaton-sgemor.appspot.com",
  messagingSenderId: "33359490156",
  appId: "1:33359490156:web:ef85a06b9bc99c2f743c49",
  measurementId: "G-8398RMHJB4",
};

const fire = firebase.initializeApp(firebaseConfig);
export default fire;
