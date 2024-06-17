import React from 'react'
import Layout from '../Common/Layout'
import Testimonuials from '../Components/Testimonuials'
import { Box } from '@mui/material'
import { Link } from 'react-router-dom'

export default function TestimonialsPage() {


  return (

    <Layout>

      <Box>
        <img src="bg.jpg" alt="" width="100%" height="400px" />
        <Box align='center' sx={{ marginTop: "-200px", color: 'white', marginBottom: "130px" }}>
          <h1 style={{ fontWeight: "bolder", fontSize: "50px" }} >TESTIMONIALS</h1>
          <div class="d-inline-flex">
            <h5 ><Link to="/" style={{ textDecoration: "none", color: "white" }}>Home</Link></h5>
            <h5><pre style={{ color: "white" }}> / </pre></h5>
            <h5>Testimonials</h5>
          </div>
        </Box>

      </Box>

      <Testimonuials />

    </Layout>
  )
}
