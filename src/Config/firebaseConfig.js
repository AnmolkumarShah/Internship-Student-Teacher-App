import firebase from 'firebase/app'
import "firebase/firestore"
import 'firebase/auth'

var firebaseConfig = {
  apiKey: "##################################",
  authDomain: "student-teacher-60724.firebaseapp.com",
  databaseURL: "https://student-teacher-60724.firebaseio.com",
  projectId: "student-teacher-60724",
  storageBucket: "student-teacher-60724.appspot.com",
  messagingSenderId: "####################",
  appId: "#########################################"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
