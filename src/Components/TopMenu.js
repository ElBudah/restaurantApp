import React from "react";
import '../Styles/menu.css';
import { TextField, Button, Typography, Box, AppBar, Toolbar, IconButton } from "@mui/material";
import {Link} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import axios from "axios";

function TopMenu(){

    const {register, reset, handleSubmit} = useForm();

    const onSubmitData = (data) => {
        console.log(data);
        axios.post('http://localhost:5000/login', data).then(res => {
            console.log(res.data);
            window.localStorage.setItem('token', res.data);
            if(res.data === true){
                window.location.href = '/logged'
            }
        })
        reset()
    }

    return(
        <div className="menu">
            <Box sx={{ flexGrow: 1}}>
                <AppBar position="static">
                    <Toolbar>
                        <form onSubmit={handleSubmit(onSubmitData)}>
                            <TextField type={'password'} {...register('password')} sx={{input: {color: 'white'}}} size="small" variant="outlined" autoComplete="off" placeholder="Password"></TextField>
                            <Button style={{ marginLeft: '10px'}} type="submit" variant="contained">Login</Button>
                            <Button variant="contained">Logout</Button>
                        </form>
                        <Typography sx={1}>Restaurante App</Typography>
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    )
}

export default TopMenu;