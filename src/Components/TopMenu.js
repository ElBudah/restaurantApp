import React from "react";
import '../Styles/main.css';
import { TextField, Button, Typography, Box, AppBar, Toolbar, IconButton } from "@mui/material";
import {Link} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import axios from "axios";
import swal from 'sweetalert2';

function TopMenu(){

    const {register, reset, handleSubmit} = useForm();

    const onSubmitData = (data) => {
        console.log(data);
        axios.post('http://localhost:5000/login', data, { withCredentials: true, credentials: 'include'}).then(res => {
            console.log(res.data);
            if(res.data === false){
                swal.fire({
                    icon: 'error',
                    title: 'Invalid',
                    text: 'Login Failed'
                })
            }

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
                        <form  onSubmit={handleSubmit(onSubmitData)}>
                            <TextField type={'password'} {...register('password')} sx={{input: {color: 'white'}}} size="small" variant="outlined" autoComplete="off" placeholder="Password"></TextField>
                            <Button style={{ marginLeft: '10px'}} type="submit" variant="contained">Login</Button>
                        </form>
                        
                        <Typography sx={{flexGrow: 1}}>Restaurante App</Typography>
                        <Typography>Logged Out</Typography>
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    )
}

export default TopMenu;