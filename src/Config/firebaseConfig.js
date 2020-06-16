import firebase from 'firebase/app'
import "firebase/firestore"
import 'firebase/auth'

var firebaseConfig = {
  apiKey: "AIzaSyAtPJ9-wWhu2WJHGm87tClv2VGzoTT3WXg",
  authDomain: "student-teacher-60724.firebaseapp.com",
  databaseURL: "https://student-teacher-60724.firebaseio.com",
  projectId: "student-teacher-60724",
  storageBucket: "student-teacher-60724.appspot.com",
  messagingSenderId: "131601404057",
  appId: "1:131601404057:web:033a223b1094f678eee808"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;