import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { testimonial } from '../Slice/TestimonialSlice' 
import { Avatar, Box, Card, CardContent, Container, Grid, Typography } from '@mui/material'
import SkeletonCard from '../Common/SkeletonCard'



export default function Testimonuials() {

    const dispatch = useDispatch()

    const {loading, data, error} = useSelector((state)=>{
        console.log("TESTIMONIAL_STATE...", state.testimonial)
        return state.testimonial
    })

    useEffect(()=>{
        dispatch(testimonial());
    },[])

    if (loading) {
        return  <SkeletonCard />
    }


  return (
    
    <>
    <Container maxWidth="lg" sx={{ marginTop: "80px" }}>
                
                <Box align='center' marginBottom='40px'>
                    <Typography variant='h3' sx={{color : "#e31c25", fontWeight : "bold"}}> Testimonials </Typography>

                </Box>
                <Grid container spacing={2} style={{ marginTop: "20px" }}>
                    {
                        data?.data?.map((item, index) => {
                            return (
                                <>
                                    <Grid item xs={12} sm={6} md={6} key={index}>
                                        <Card sx={{ maxWidth: 560 ,height: "230px",backgroundColor : "black" }} style={{ padding: "30px", marginBottom: "30px"}} elevation={20} >
                                            
                                            <Avatar 
                                                src={`${process.env.REACT_APP_BASE_URL}/${item.image}`}
                                                alt='PHOTO'
                                                sx={{width : 90, height : 90, textAlign: "center" }}
                                                
                                            />
                                            <CardContent sx={{marginTop: "-60px"}}>
                                                <Typography gutterBottom variant="h5" component="div" align='center' color="#e31c25" fontWeight='bolder' fontSize="30px">
                                                {item.client_name} 
                                                </Typography>
                                                {/* <Typography gutterBottom variant="body1" color="text.secondary" align='center' >
                                                   
                                                     {item.review}
                                                </Typography> */}
                                                <Typography variant="body2" color="white" align='center' >
                                
                                                     {item.review}
                                                </Typography>
                                            </CardContent>
                                           
                                        </Card>
                                    </Grid>
                                </>
                            )
                        })
                    }


                </Grid>

            </Container>
    </>
  )
}
