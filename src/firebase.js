import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyCW8Dd_reEbKdIY_n8FtHa8S6J3DuQLlZw",
  authDomain: "starbucks-clone-2de68.firebaseapp.com",
  projectId: "starbucks-clone-2de68",
  storageBucket: "starbucks-clone-2de68.appspot.com",
  messagingSenderId: "567863761788",
  appId: "1:567863761788:web:ebde19b77403bf5075e2f9"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const auth = firebaseApp.auth()

export { auth }
