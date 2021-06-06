import firebase from "firebase/app";

import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD5AlfOEMNPtAfcPt4KdFO6W_qjtr_nbcg",
  authDomain: "yt-985ca.firebaseapp.com",
  projectId: "yt-985ca",
  storageBucket: "yt-985ca.appspot.com",
  messagingSenderId: "337860126158",
  appId: "1:337860126158:web:074af938decd5dbff7779f",
};

firebase.initializeApp(firebaseConfig);

export default firebase.auth();
