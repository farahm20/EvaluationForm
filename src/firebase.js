import firebase from 'firebase/app'
import 'firebase/storage';
import 'firebase/firestore';
//Environment variables
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyAIILV7A9YqpuG_kECmGIRcdXohhh5bXh8",
    authDomain: "client-evaluation.firebaseapp.com",
    projectId: "client-evaluation",
    storageBucket: "client-evaluation.appspot.com",
    messagingSenderId: "409895502525",
    appId: "1:409895502525:web:8839f334884f9ba917edd4",
    measurementId: "G-6CJSE70NSH"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

export default firebase