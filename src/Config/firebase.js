import firebase from 'firebase/app'
import 'firebase/auth'
 


var firebaseConfig = {
  apiKey: "AIzaSyAnJHDVSt0p0Ic-XHcaby144UtVKmX8oBA",
    authDomain: "react-quizapplication.firebaseapp.com",
    databaseURL: "https://react-quizapplication.firebaseio.com",
    projectId: "react-quizapplication",
    storageBucket: "",
    messagingSenderId: "267400624579",
    appId: "1:267400624579:web:d520a9d4018be275"
  };
  const provider = new firebase.auth.FacebookAuthProvider()
  const firebaseApp=  firebase.initializeApp(firebaseConfig);
  export{
    provider,
    firebaseApp
  };
  
  