import React, {Component, useContext, useEffect, useState} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {privatRoutes, publicRoutes} from "./Routes";
import  "firebase/auth"
import {getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import {provider} from "../index";
import {useAuthState} from "react-firebase-hooks/auth";







export const AppRouter = () => {
    const auth = getAuth();
    auth.languageCode = 'it';
    const [user] = useAuthState(auth)

    return(
        <Routes>
            {user
                ? (privatRoutes.map(({ path, Element, toPath }) => <Route key={path} path={path} element={<Element to={toPath ? toPath : ''}/>} />))
                : publicRoutes.map(({ path, Element, toPath }) => <Route key={path} path={path} element={<Element
                    to={toPath ? toPath : ''}/>} />)}
        </Routes>
    )
}
