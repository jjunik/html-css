import React from "react";
import "./index.css"
import App from "./App";
import Login from './Login'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Typography,Box } from "@mui/material";
import Signup from "./Signup";
import socialLogin from "./SocialLogin";

function Copyright(){
    return(
        <Typography variant="body2" color="textSecondary" align="center">
            {"Copyright "}
            fsoftwareengineer, {new Date().getFullYear()}
            {"."}
        </Typography>
    )
}

function AppRouter(){
    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup/>}/>
                    <Route path="/SocialLogin" element={<socialLogin/>}/>
                </Routes>
            </BrowserRouter>
            <Box mt={5}>
                <Copyright />
            </Box>
        </div>
    )
}

export default AppRouter;