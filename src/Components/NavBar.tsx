import React from 'react';
import {AppBar, Box, Button, IconButton, Toolbar, Typography} from "@mui/material";
import {NavLink} from "react-router-dom";
import {LOGIN_ROUTE} from "../utils/Consts";
import {getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import {provider} from "../index";
import {useAuthState} from "react-firebase-hooks/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import "firebase/auth";


export const NavBar = () => {
    const auth = getAuth();
    auth.languageCode = 'it';
 const [user] = useAuthState(auth)
    console.log(auth)
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >

                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Life Chat
                    </Typography>
                    {user ?
                    <Button color="inherit" onClick={()=>auth.signOut()}>Выйти</Button>
                        :
                        <NavLink to={LOGIN_ROUTE}> <Button color="inherit">Логин</Button></NavLink>

                    }
                </Toolbar>
            </AppBar>
        </Box>
    );
};

/*
<script type="module">
    // Import the functions you need from the SDKs you need
    import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
    import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries

    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
</script>*/
