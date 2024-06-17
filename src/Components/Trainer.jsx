import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { trainer } from '../Slice/TrainerSlice'
import { Box, Container, Grid } from '@mui/material'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SkeletonCard from '../Common/SkeletonCard';

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      />
    );
  }



export default function Trainer() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        className: "center",
        centerMode: true,
        centerPadding: "30px",
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        pauseOnHover: true,

        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };


    const dispatch = useDispatch()

    const { loading, data, error } = useSelector((state) => {
        console.log("TRAINER_STATE...", state.trainer)
        return state.trainer
    })

    useEffect(() => {
        dispatch(trainer());
    }, [])


    if (loading) {
        return  <SkeletonCard />
    }


    return (
        <>

            <Container sx={{ marginTop: "50px" }}>
                <Box align='center' marginBottom='40px'>
                    <Typography variant='h3' sx={{ color: "#e31c25", fontWeight: "bold" }}> Meet Our trainers </Typography>

                </Box>
                <Grid container spacing={2}>

                    {/* {
                        data?.data?.map((item, index) => {
                            return (
                                <Grid item md={4} key={index}>
                                    <Card elevation={20} sx={{ maxWidth: 345, backgroundColor: "black" }}>
                                        <CardActionArea>
                                            <CardMedia
                                                component="img"
                                                height="380"
                                                image={`${process.env.REACT_APP_BASE_URL}/${item.image}`}
                                                alt="green iguana"
                                            />
                                            <CardContent align="center">
                                                <Typography gutterBottom variant="h5" component="div" color='#e31c25' fontWeight="bolder">
                                                    {item.name}
                                                </Typography>
                                                <Typography variant="body2" color='white'>
                                                    {item.speciality}
                                                </Typography>
                                                <Typography variant="body2" color='white'>
                                                    {item.experience}
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>

                                </Grid>
                            )
                        })
                    } */}


                </Grid>
            </Container>

            <Container maxWidth="xl">
                <Slider {...settings}>

                    {
                        data?.data?.map((item, index) => {
                            return (
                                <Grid item md={4} key={index}>
                                    <Card elevation={20} sx={{ maxWidth: 345, backgroundColor: "black" }}>
                                        <CardActionArea>
                                            <CardMedia
                                                component="img"
                                                height="380"
                                                image={`${process.env.REACT_APP_BASE_URL}/${item.image}`}
                                                alt="green iguana"
                                            />
                                            <CardContent align="center">
                                                <Typography gutterBottom variant="h5" component="div" color='#e31c25' fontWeight="bolder">
                                                    {item.name}
                                                </Typography>
                                                <Typography variant="body2" color='white'>
                                                    {item.speciality}
                                                </Typography>
                                                <Typography variant="body2" color='white'>
                                                    {item.experience}
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>

                                </Grid>
                            )
                        })
                    }

                </Slider>

            </Container>


        </>
    )
}
