import { Button, TextareaAutosize } from "@mui/material";
import React from "react";
import { Link } from 'react-router-dom';
import TopMenu from "../Components/TopMenu";
import '../Styles/addreport.css';
import {useForm} from 'react-hook-form';
import axios from "axios";

function Home() {

    const {register, reset, handleSubmit} = useForm();

    const onSubmitData = (data) => {
        console.log(data);
        axios.post('http://localhost:5000/addreport', data).then(res => {
            
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
                    <Button variant="contained" type="submit">Submit Report</Button>
                </form>

            </div>

        </div>
    )
}

export default Home;