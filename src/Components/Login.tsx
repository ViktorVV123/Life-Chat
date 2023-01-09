import React from 'react';
import {Box, Button, Container, Grid} from "@mui/material";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth"
import {provider} from "../index";



export const Login = () => {

 const auth2= async ()=>{
    const auth =await getAuth();

    signInWithPopup(auth, provider)
    .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);

        // The signed-in user info.
        const user = result.user;
        // ...
    }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...\
        console.log(auth2)
    });
}

    return (
        <Container>

            <Grid container style={{height: window.innerHeight - 80 }} alignItems={'center'} justifyContent={'center'}>
<Grid style={{width:400,background: 'lightgray'}} container alignItems={'center'} direction={'column'}>
    <Box p={5}>
        <Button onClick={auth2}   variant={'outlined'}>Войти с помощью Google</Button>
    </Box>
</Grid>
            </Grid>
        </Container>
    );
};

