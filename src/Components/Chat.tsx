import React from 'react';
import {getAuth} from "firebase/auth";
import {Container, Grid, TextField} from "@mui/material";

export const Chat = () => {
    const auth = getAuth();
    auth.languageCode = 'it';
    return (
        <Container>
            <Grid container justifyContent={'center'}
                  style={{height: window.innerHeight - 140, margin: 30}}
            >
                <div style={{width: '80%', height: '60vh', border: '1px solid gray', overflowY: 'auto'}}>

                </div>
                <TextField
                    maxRows={2}
                    fullWidth
                    variant={"outlined"}
                    style={{width: '80%'}}
                />
            </Grid>
        </Container>
    );
};

