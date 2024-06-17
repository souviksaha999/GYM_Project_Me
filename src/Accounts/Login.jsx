import { Avatar, Box, Button, Grid, Paper, TextField, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { logInUser } from '../Slice/AuthSlice';
import Layout from '../Common/Layout';
import SubmitLoader from '../Common/SubmitLoader';
import { regLogout } from '../Slice/AuthSlice';

export default function Login() {

    const { register, watch, reset, formState: { errors }, handleSubmit } = useForm()
    console.log(watch(["email", "password"]))

    const dispatch = useDispatch()

    const { loading, redirectToHome } = useSelector((state) => {
        console.log("LOGIN__STATE....", state.auth)
        return state.auth
    })

    const onsubmit = (data) => {
        console.log("DATA....", data)
        dispatch(logInUser(data))
        reset()
    }

    const navigate = useNavigate()
    useEffect(() => {
        const redirectUser = () => {
            let name = localStorage.getItem("token")
            let isInLoginPage = window.location.pathname.toLowerCase() === "/login";  // window.location.pathname property is used to return pathname of current URL
            if (name !== null && name !== undefined && name !== "") {
                isInLoginPage && navigate("/");
            }
        }
        redirectUser();
    }, [redirectToHome])

    const reg = () => {
        dispatch(regLogout())
    }




    return (
        <Layout>

            <Box>
                <img src="bg.jpg" alt="" width="100%" height="350px" />
                <Box align='center' sx={{ marginTop: "-200px", color: 'white', marginBottom: "130px" }}>
                    <h1 style={{ fontWeight: "bolder", fontSize: "50px" }} >GYMNASIUM</h1>
                    <div class="d-inline-flex">
                        <h5 ><Link to="/" style={{ textDecoration: "none", color: "white" }}>Home</Link></h5>
                        <h5><pre style={{ color: "white" }}> / </pre></h5>
                        <h5>Log In</h5>
                    </div>
                </Box>

            </Box>

            <Grid sx={{ marginTop: "100px" }}>
                <Paper elevation={20} style={{ padding: "30px 20px", width: 500, margin: "20px auto" }}>
                    <Grid align="center">
                        <Avatar>
                            <AddCircleOutlineIcon />
                        </Avatar>
                        <h2>Log In</h2>
                        <Typography variant='caption' >Please log into your account !</Typography>
                    </Grid>
                    <Grid>
                        <form action="" method='POST' onSubmit={handleSubmit(onsubmit)}>

                            <TextField fullWidth label='Email' margin='normal' color='secondary' type='email' {...register("email", { required: true })} />
                            <br />
                            {errors.email?.type === "required" && <span style={{ color: 'red' }}>This Field is Required</span>}

                            <TextField fullWidth margin='normal' color='secondary' label="Password" type='password' {...register("password", { required: true })} />
                            <br />
                            {errors.password?.type === "required" && <span style={{ color: "red" }}>Password is Required</span>}

                            <Box align='center' mt={2}>
                                {/* <Button type='submit' variant='contained' color='secondary'>{load? <><SubmitLoader/> Loading....</> : "Login" }  </Button> <br /> */}
                                <Button type='submit' variant='contained' color='secondary'> {loading ? <SubmitLoader /> : "Login"} </Button> <br />
                                <Typography variant='caption'><Link to="/reg" onClick={reg} style={{textDecoration : "none"}} >Don't have an Acoount?..Register here....</Link></Typography>
                            </Box>

                        </form>
                    </Grid>

                </Paper>
            </Grid>
        </Layout>
    )
}
