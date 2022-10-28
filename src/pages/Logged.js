import axios from "axios";
import React from "react";
import LoggedTopMenu from "../Components/LoggedTopMenu";
import { useState } from 'react';
import { Button } from "@mui/material";


function Logged() {

    const [user, setUser] = useState()

    function chamadado() {
        axios.get('http://localhost:5000/getallreports', {withCredentials: true, credentials: 'include'}).then(res => {
            console.log(res.data);

        })
    }

    function token(){
        axios.get('http://localhost:5000/gettoken', {withCredentials: true, credentials: 'include'}).then(res => {
            console.log(res.data);
        })
    }

    return (
        <div>
            <LoggedTopMenu />
            <h2></h2>
            <Button variant="contained" onClick={chamadado}>Chama Dado</Button>
            <p></p>
            <Button variant="contained" onClick={token}>Chama token</Button>
        </div>
    )
}

export default Logged;