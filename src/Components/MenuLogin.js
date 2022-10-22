import { BorderColor } from "@mui/icons-material";
import { Button, TextField, Typography } from "@mui/material";
import { border } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import '../Styles/menu.css';
import { useForm } from 'react-hook-form';
import axios from 'axios';

function MenuLogin() {

    const { register, reset, formState: { errors }, handleSubmit } = useForm();

    const onSubmitData = (data) => {
        console.log(data);
        axios.post('http://localhost:5000/login', data)
        reset();
    }

    return (
        <div className="menu">
            <Typography color='secondary' style={{ fontSize: '30px' }}>Login</Typography>
            <form onSubmit={handleSubmit(onSubmitData)}>
                <TextField {...register('password')} variant="outlined" color="secondary" label="Password" sx={{ input: { color: 'white' } }}
                ></TextField>
                <p></p>
                <Button variant="contained" type="submit" style={{ width: '150px' }}>Submit</Button>
            </form>
            <p></p>
            <Link to='/' style={{ textDecoration: 'none' }}><Button variant="contained" style={{ width: '150px' }}>Return</Button></Link>
        </div>
    )
}

export default MenuLogin;