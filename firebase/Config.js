import {initializeApp} from 'firebase/app';
import {getFirestore, collection, doc, setDoc, addDoc, serverTimestamp, onSnapshot, query, updateDoc
, increment, orderBy} from 'firebase/firestore';


const firebaseConfig = {
    apiKey: process.env.EXPO_PUBLIC_API_KEY,
    authDomain: process.env.EXPO_PUBLIC_AUTH,
    projectId: process.env.EXPO_PUBLIC_PROJECT_ID,
    storageBucket: process.env.EXPO_PUBLIC_STORAGE_BUCKET,
    messagingSenderId: process.env.EXPO_PUBLIC_MESSAGING_SENDER_ID,
    appId: process.env.EXPO_PUBLIC_APP_ID
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore();

const USERS = 'users';

export{
    db,
    collection,
    addDoc,
    serverTimestamp,
    USERS,
    onSnapshot,
    doc,
    query,
    updateDoc,
    increment,
    orderBy
};