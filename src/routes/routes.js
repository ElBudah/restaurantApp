import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import isUtils from "../Controller/isUtils";
import AllReports from "../pages/AllReports";
import Home from '../pages/Home';
import Login from "../pages/Login";
import OwnerPage from "../pages/OwnerPage";

function Router() {

    function PrivateRoute({ children }) {
        const auth = isUtils();

        if(auth){
            return auth ? children: <Navigate to="/getallreports"/>
        }else{
            return <Navigate to="/"/>
        }
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/ownermenu" element={<OwnerPage />} />
                <Route path="/getallreports" element={<PrivateRoute>
                    <AllReports />
                </PrivateRoute>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;