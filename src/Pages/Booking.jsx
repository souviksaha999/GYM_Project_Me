import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Layout from '../Common/Layout'
import { bookingfetch } from '../Slice/BookingSlice'
import { Box, Card, CardActionArea, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import SkeletonCard from '../Common/SkeletonCard'

export default function Booking() {

    const dispatch = useDispatch()

    const {loading,data,error} = useSelector((state)=>{
        console.log("BOOKING_STATE...", state.booking)
        return state.booking
    })

    useEffect(()=>{
        dispatch(bookingfetch())
    },[])

    if (loading) {
        return  <SkeletonCard />
        //  <div style={{height : "70vh"}}> <h1 style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>  <SkeletonCard /> </h1></div>
    }


  return (
    <Layout>
    <Box>
            <img src="bg.jpg" alt="" width="100%" height="400px" />
            <Box align='center' sx={{marginTop : "-200px", color:'white',  marginBottom: "130px" }}>
            <h1 style={{fontWeight : "bolder", fontSize : "50px"}} >BOOKING</h1>
            <div class="d-inline-flex">
                <h5 ><Link to="/" style={{textDecoration : "none", color : "white"}}>Home</Link></h5>
                <h5><pre style={{color :"white"}}> / </pre></h5>
                <h5>Booking</h5>
            </div>
            </Box>
           
        </Box>

        <Container sx={{marginTop : "50px"}}>
                <Box align='center' marginBottom='40px'>
                    <Typography variant='h3' sx={{color : "#e31c25", fontWeight : "bold"}}> Bookings </Typography>

                </Box>
                <Grid container spacing={2}>
                    {
                        data?.result?.map((item, index) => {
                            return (
                                <Grid item md={4} key={index}>
                                    <Card elevation={20} sx={{ maxWidth: 420, backgroundColor: "black" }}>
                                        <CardActionArea>
                                            <Grid container spacing={2}>
                                            <Grid item xs={6.5}>
                                            <CardMedia
                                                component="img"
                                                height="280"
                                                image={`${process.env.REACT_APP_BASE_URL}/${item.serviceId.image}`}
                                                alt="green iguana"
                                            />
                                                 </Grid>
                                            <Grid item xs={5.5}>
                                            <Typography gutterBottom variant="h5" component="div" color='#e31c25' fontWeight="bolder" >
                                                    {item.serviceId.service_name}
                                                </Typography>
                                                <Typography variant="h6"  color='white'>
                                                    {item.scheme}
                                                </Typography>
                                                <Typography variant="h6"  color='white'>
                                                    ${item.price}
                                                </Typography>
                                                 </Grid> 
                                            </Grid>
                                            
                                            
                                            <CardContent align="center">
                                                <Typography gutterBottom variant="h5" component="div" color='#e31c25' fontWeight="bolder">
                                                    {item.name}
                                                </Typography>
                                                <Typography variant="body2"  color='white'>
                                                    {item.email}
                                                </Typography>
                                                
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>

                                </Grid>
                            )
                        })
                    }

                </Grid>
            </Container>

    </Layout>
  )
}
