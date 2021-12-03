/**
 * This is the firebase database I will be using to store all the clothing items
 * Author: Novia Wu
 * Date: 12/2/2021
 */
import firebase from "firebase";

let app = null;

const firebaseConfig = {
  apiKey: "AIzaSyCloQHAmwE3jq_xeq7bJ2UIiYW1uImX0n4",
  authDomain: "wardrober-bcf4d.firebaseapp.com",
  projectId: "wardrober-bcf4d",
  storageBucket: "wardrober-bcf4d.appspot.com",
  messagingSenderId: "995625455134",
  appId: "1:995625455134:web:fd80e646ee56ee75b8a80f",
  measurementId: "G-11XND8EPF1",
  databaseURL: "https://wardrober-bcf4d-default-rtdb.firebaseio.com/",
};

if (!firebase.apps.length) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const firebaseRealtimeDB = app.database();
const firebaseStorage = app.storage();

export { firebaseStorage, firebaseRealtimeDB };
