import React from "react";
import { AppBar, Box, TextField, Button, Toolbar, Typography } from '@mui/material';

function LoggedTopMenu() {
    return (
        <div className="menu">
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <Button variant="contained">Logout</Button>
                        <Typography style={{ marginLeft: '10px', flexGrow: 1}} sx={1}>Restaurant App </Typography>
                        <Typography sx={1}>Logged</Typography>
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    )
}

export default LoggedTopMenu;