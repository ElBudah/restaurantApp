import axios from "axios";
import React from "react";
import LoggedTopMenu from "../Components/LoggedTopMenu";
import { useState } from 'react';
import { Button } from "@mui/material";


function Logged() {

    const [report, setReport] = useState([]);

    const clock = 2000;

    setInterval(chamadado(), clock);

    function chamadado() {
        axios.get('http://localhost:5000/getallreports', {withCredentials: true, credentials: 'include'}).then(res => {
            console.log(res.data);
            setReport(res.data);
        })
    }

    function deleteAllReports(){
        axios.delete('http://localhost:5000/deleteallreports', {withCredentials: true, credentials: 'include'});
    }

    return (
        <div>
            <LoggedTopMenu />
            {report.map( user => <h3 key={user.id}>{user.user +' - '+user.report}</h3>)}
            <p></p>
            <Button variant="contained" onClick={deleteAllReports} style={{ width: '200px'}}>Delete All Reports</Button>
        </div>
    )
}

export default Logged;