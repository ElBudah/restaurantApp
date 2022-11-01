import { Button, TextareaAutosize, TextField } from "@mui/material";
import React from "react";
import { Link } from 'react-router-dom';
import TopMenu from "../Components/TopMenu";
import '../Styles/addreport.css';
import {useForm} from 'react-hook-form';
import axios from "axios";
import swal from 'sweetalert2';
import { yupResolver} from '@hookform/resolvers/yup';
import userSchema from "../validation/uservalidation";

function Home() {

    const {register, reset, formState: {errors}, handleSubmit} = useForm({
        resolver: yupResolver(userSchema),
    });

    const onSubmitData = (data) => {
        console.log(data);
        axios.post('http://localhost:5000/addreport', data).then(res => {
            swal.fire({
                icon: 'success',
                title: 'Success',
                text: 'Report added!'
            })
        })
        reset();
    }

    return (
        <div>
            <TopMenu />
            <div className="addreport">
                <form onSubmit={handleSubmit(onSubmitData)}>
                    <TextareaAutosize className="textarea" name="report" maxRows={8} minRows={3} {...register('txtReport')} placeholder="Type here your report..."></TextareaAutosize>
                    <p></p>
                    <TextField {...register('user')} label="User"></TextField>
                    <h4>{errors.user?.message}</h4>
                    <p></p>
                    <Button variant="contained" type="submit">Submit Report</Button>
                </form>

            </div>

        </div>
    )
}

export default Home;