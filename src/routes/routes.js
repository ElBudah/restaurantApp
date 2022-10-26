import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import isUtils from "../Controller/isUtils";
import Home from '../pages/Home';
import Logged from "../pages/Logged";

function Router() {

    function PrivateRoute({ children }) {
        const auth = isUtils();

        if (auth) {
            return auth ? children : <Navigate to="/logged" />
        } else {
            return <Navigate to="/" />
        }
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/logged" element={<PrivateRoute>
                    <Logged></Logged>
                </PrivateRoute>} />
                
            </Routes>
        </BrowserRouter>
    )
}

export default Router;