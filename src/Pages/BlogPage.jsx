import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { blogfetch } from '../Slice/BlogSlice'
import Layout from '../Common/Layout'
import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import SkeletonCard from '../Common/SkeletonCard'

export default function BlogPage() {

    const dispatch = useDispatch()

    const { loading, data, error } = useSelector((state) => {
        console.log('BLOG_STATE...', state.blog)
        return state.blog
    })

    useEffect(() => {
        dispatch(blogfetch())
    }, [])

    if (loading) {
        return  <SkeletonCard />
        //  <div style={{height : "70vh"}}> <h1 style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>  <SkeletonCard /> </h1></div>
    }

    return (
        <Layout>
            <Box>
                <img src="bg.jpg" alt="" width="100%" height="400px" />
                <Box align='center' sx={{ marginTop: "-200px", color: 'white', marginBottom: "130px" }}>
                    <h1 style={{ fontWeight: "bolder", fontSize: "50px" }} >BLOG</h1>
                    <div class="d-inline-flex">
                        <h5 ><Link to="/" style={{ textDecoration: "none", color: "white" }}>Home</Link></h5>
                        <h5><pre style={{ color: "white" }}> / </pre></h5>
                        <h5>Blog</h5>
                    </div>
                </Box>
            </Box>

            <Container sx={{ marginTop: "50px" }}>
                <Box align='center' marginBottom='40px'>
                    <Typography variant='h3' sx={{ color: "#e31c25", fontWeight: "bold" }}> Our Blogs </Typography>

                </Box>
                <Grid container spacing={2}>
                    {
                        data?.data?.map((item, index) => {
                            return (
                                <Grid item md={4} key={index}>
                                    <Card elevation={20} sx={{ maxWidth: 345, backgroundColor: "black", height : "563px" }}>
                                        <CardActionArea>
                                            <CardMedia
                                                component="img"
                                                height="380"
                                                image={`${process.env.REACT_APP_BASE_URL}/${item.image}`}
                                                alt="green iguana"
                                            />
                                            <CardContent align="center">
                                                <Typography gutterBottom variant="h6" component="div" color='#e31c25' fontWeight="bolder">
                                                    {item.title}
                                                </Typography>                                          
                                                <Typography variant="body2" color='white'>
                                                    {item.subtitle}
                                                </Typography>
                                            </CardContent>
                                            <CardActions>
                                                <Link to={`/blogdetails/${item._id}`} class="btn btn" style={{ marginLeft: "auto", marginTop: "-10px", backgroundColor:"#c31e25",color : "white" }}>Read More</Link>
                                            </CardActions>
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
