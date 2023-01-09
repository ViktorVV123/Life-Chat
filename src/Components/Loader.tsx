import React from 'react';
import {Box, Button, Container, Grid} from "@mui/material";
import './allStyle.css'


export const Loader = () => {
    return (
        <Container>

            <Grid container style={{height: window.innerHeight - 80 }} alignItems={'center'} justifyContent={'center'}>
                <Grid  container alignItems={'center'} direction={'column'}>
                    <div className="lds-ring">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </Grid>
            </Grid>
        </Container>
    );
};

