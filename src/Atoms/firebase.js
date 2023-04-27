import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';


const myApp=firebase.initializeApp({
    apiKey: "AIzaSyAvVW6lxmo4KfynhScCqgKJw6BV4-fvzRo",
  authDomain: "listed-assignment-16860.firebaseapp.com",
  projectId: "listed-assignment-16860",
  storageBucket: "listed-assignment-16860.appspot.com",
  messagingSenderId: "438265855109",
  appId: "1:438265855109:web:ee91bade2dae5b62ca7dec",
})

export const auth=firebase.auth()
const googleProvider=new firebase.auth.GoogleAuthProvider()

export const signInWithGoogle= ()=> {
    auth.signInWithPopup(googleProvider).then((res)=>{
        console.log(res.user)
    }).catch((error)=>{
        console.log(error.message);
    })
}