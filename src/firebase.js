import firebase from 'firebase'
import 'firebase/database'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCfct_SIpVqCz1LBYZ4lfjVft5r06wKQ8U",
    authDomain: "postitwall-d4718.firebaseapp.com",
    databaseURL: "https://postitwall-d4718.firebaseio.com",
    projectId: "postitwall-d4718",
    storageBucket: "postitwall-d4718.appspot.com",
    messagingSenderId: "874739315950",
    appId: "1:874739315950:web:2c5b8bbe868bcae7e7afff"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
