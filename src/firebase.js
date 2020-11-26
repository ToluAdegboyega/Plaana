import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/app';

const  firebaseapp  =   firebase.initializeApp({
    apiKey: "AIzaSyCMmCvNDI-s2TQXsnQwGg7BirrH9W4Sz5s",
    authDomain: "todolist-auth.firebaseapp.com",
    databaseURL: "https://todolist-auth.firebaseio.com",
    projectId: "todolist-auth",
    storageBucket: "todolist-auth.appspot.com",
    messagingSenderId: "953784918540",
    appId: "1:953784918540:web:8b61c3dfb77a5eb6b70429"
});

export  default firebaseapp;