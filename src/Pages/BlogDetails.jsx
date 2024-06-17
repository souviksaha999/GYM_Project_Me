import React, { useEffect } from 'react'
import Layout from '../Common/Layout'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { blogDetailsfetch } from '../Slice/BlogDetailsSlice'
import { Box, Container, Grid, Typography } from '@mui/material'

import Aos from 'aos'
import 'aos/dist/aos.css'
import SkeletonDetails from '../Common/SkeletonDetails'


export default function BlogDetails() {

    useEffect(()=>{
        Aos.init({
            duration: 3000,
            // easing: 'ease-in-sine',
            // delay: 100,
        });
    })

    const {id} = useParams()

    const dispatch = useDispatch()

    const {loading, data, error} = useSelector((state)=>{
        console.log("BLOGDETAILS_STATE...", state.blogDetails)
        return state.blogDetails
    })

    useEffect(()=>{
        dispatch(blogDetailsfetch(id))
    },[])

    if (loading) {
        return  <SkeletonDetails />
    }

  return (
    <Layout>
        <Box>
                {/* <img src="bg.jpg" alt="" width="100%" height="400px" /> */}
                <img src="https://wallpapers.com/images/hd/chris-bumstead-lifting-heavy-dumbbell-5hy47wmggeb8vmie.jpg" alt="" width="100%" height="400px" />
                <Box align='center' sx={{ marginTop: "-200px", color: 'white', marginBottom: "130px" }}>
                    <h1 style={{ fontWeight: "bolder", fontSize: "50px" }} >BLOG DETAILS</h1>
                    <div class="d-inline-flex">
                        <h5 ><Link to="/" style={{ textDecoration: "none", color: "white" }}>Home</Link></h5>
                        <h5><pre style={{ color: "white" }}> / </pre></h5>
                        <h5>Blog Details</h5>
                    </div>
                </Box>
            </Box>


        <Container>
            <Grid container spacing={2}>
                <Grid item md={8} bgcolor="black" data-aos="fade-down-right">
                    <img src={`${process.env.REACT_APP_BASE_URL}/${data?.data?.image}`} alt="" width="100%"/>

                </Grid>

                <Grid item md={4} bgcolor="black" data-aos="fade-down-left" >
                    <Typography variant='h4' color="#c31e25" fontWeight="bold" marginBottom="20px" > 
                    {data?.data?.title}
                    </Typography>
                    <Typography variant='h6' color="white" fontWeight="bold" marginBottom="10px" > 
                    {data?.data?.subtitle}
                    </Typography>
                    <Typography variant='body2' color="white"> 
                    {data?.data?.content}
                    </Typography>
                    
                </Grid>

            </Grid>
        </Container>


    
    </Layout>
  )
}
