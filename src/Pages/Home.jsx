import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { banner } from '../Slice/BannerSlice'
import Layout from '../Common/Layout'
import Carousel from 'react-material-ui-carousel'
import { Box, CardMedia, Typography } from '@mui/material'
import { trainer } from '../Slice/TrainerSlice'
import { testimonial } from '../Slice/TestimonialSlice' 
import Testimonuials from '../Components/Testimonuials'
import Trainer from '../Components/Trainer'
import Services from '../Components/Services'
import BlogPage from './BlogPage'
import SkeletonCard from '../Common/SkeletonCard'




export default function Home() {
    const dispatch = useDispatch()

    const {loading,data,error} = useSelector((state)=>{
        console.log("BANNER_STATE...", state.banner)
        return state.banner
    })

    useEffect(()=>{
        dispatch(banner());
    },[])

    if (loading) {
        return  <SkeletonCard />
        //  <div style={{height : "70vh"}}> <h1 style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>  <SkeletonCard /> </h1></div>
    }

  return (
    <Layout>
        {/********  BANNER START  ********/}
        <Carousel>
            {
                data?.data?.map( (item, index) =>{
                    return(
                        <>
                        {/* <Item key={index} item={item} /> */}
                        {/* <img src={`https://corefitserver.onrender.com/${item.image}`} alt="" width="100%" height="700px"/> */}
                        <Box key={index}>
                            <CardMedia component="img" alt="PHOTO" image={`${process.env.REACT_APP_BASE_URL}/${item.image}`} style={{ width: "100%", height: "45rem", objectFit: "fill" }} />
                          </Box>

                          <Box align= 'center' sx={{color : "white", marginTop: "-150px" }}>
                          <Typography variant='h5'> {item.title} </Typography>
                          <Typography variant='h6'> {item.subtitle} </Typography>
                          </Box>
                          
                        </>
                    )
                }  )
            }
        </Carousel>
        {/********  BANNER END  ********/}


        {/********  TRAINR START  ********/}

            <Trainer />

        {/********  TRAINR END  ********/}


        {/********  TESTIMONIAL START  ********/}

            <Testimonuials />


        {/********  TESTIMONIAL END  ********/}


        {/********  SERVICES START  ********/}

            <Services />


        {/********  SERVICES END  ********/}

        




    </Layout>
  )
}
