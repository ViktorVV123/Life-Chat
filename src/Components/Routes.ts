import {CHAT_ROUTE, LOGIN_ROUTE} from "../utils/Consts";
import {Login} from "./Login";
import {Chat} from "./Chat";
import {Navigate} from "react-router-dom";



export const publicRoutes = [
    {path: LOGIN_ROUTE, Element: Login},
    {path: "*", Element: Navigate, toPath: LOGIN_ROUTE}
]
/* то что видят авторизованные*/
export const privatRoutes = [
    {path: CHAT_ROUTE, Element: Chat},
    {path: "*", Element: Navigate, toPath: CHAT_ROUTE}
]
