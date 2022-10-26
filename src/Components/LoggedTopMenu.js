import React from "react";
import { AppBar, Box, TextField, Button, Toolbar, Typography } from '@mui/material';

function LoggedTopMenu() {

    function logout(){
        window.localStorage.clear('token');
        window.location.href = '/';
    }

    return (
        <div className="menu">
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <Button onClick={logout} variant="contained">Logout</Button>
                        <Typography style={{ marginLeft: '10px', flexGrow: 1}} >Restaurant App </Typography>
                        <Typography >Logged</Typography>
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    )
}

export default LoggedTopMenu;