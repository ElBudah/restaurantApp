import React from "react";
import '../Styles/menu.css';
import { TextField, Button, Typography } from "@mui/material";
import {Link} from 'react-router-dom';

function Menu(){
    return(
        <div className="menu">
            <Typography color='secondary' style={{fontSize: '30px'}}>Menu</Typography>
            <Button variant="contained" color="secondary" style={{width: '150px'}}>Add Report</Button>
            <p></p>
            <Link to='/Login' style={{ textDecoration: 'none'}}><Button variant="contained" color="secondary" style={{width: '150px'}}>Login</Button></Link>
            <p></p>
            <Button variant="contained" color="secondary" style={{width: '150px'}}>Logout</Button>
            
        </div>
    )
}

export default Menu;