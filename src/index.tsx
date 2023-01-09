import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider } from "firebase/auth";




const firebaseConfig = {
    apiKey: "AIzaSyAGDxQIihr8gt8BglXy3T734djfmbv_oY0",
    authDomain: "life-chat-44879.firebaseapp.com",
    projectId: "life-chat-44879",
    storageBucket: "life-chat-44879.appspot.com",
    messagingSenderId: "740671718453",
    appId: "1:740671718453:web:8b7a24295fdb2e70bedd7c",
    measurementId: "G-PM1E28GC9F"};
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app)
export const provider = new GoogleAuthProvider();







const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

reportWebVitals();
/*
import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from "firebase/compat";
import initializeApp = firebase.initializeApp;

const firebaseConfig = {
    apiKey: "AIzaSyAGDxQIihr8gt8BglXy3T734djfmbv_oY0",
    authDomain: "life-chat-44879.firebaseapp.com",
    projectId: "life-chat-44879",
    storageBucket: "life-chat-44879.appspot.com",
    messagingSenderId: "740671718453",
    appId: "1:740671718453:web:8b7a24295fdb2e70bedd7c",
    measurementId: "G-PM1E28GC9F"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);




const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

reportWebVitals();
*/

