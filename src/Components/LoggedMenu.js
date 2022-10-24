import { Button, Typography } from "@mui/material";
import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import '../Styles/menu.css';

function LoggedMenu(){

    function logout(){
        window.localStorage.removeItem('token');
        axios.get('http://localhost:5000/logout').then(res => {
            window.location.href = '/'
        })
    }

    return(
        <div className="menu">
            <Typography>Owner Menu</Typography>
            <p></p>
            <Link to="/getallreports" style={{textDecoration: 'none'}}><Button variant="contained" >View All Reports</Button></Link>
            <p></p>
            <Button variant="contained" onClick={logout} >Logout</Button>
        </div>
    )
}

export default LoggedMenu;