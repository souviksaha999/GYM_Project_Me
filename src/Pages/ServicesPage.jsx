import React from 'react'
import Services from '../Components/Services'
import Layout from '../Common/Layout'
import { Box } from '@mui/material'
import { Link } from 'react-router-dom'

export default function ServicesPage() {


  return (
    <Layout>

<Box>
        <img src="bg.jpg" alt="" width="100%" height="400px" />
        <Box align='center' sx={{ marginTop: "-200px", color: 'white', marginBottom: "130px" }}>
          <h1 style={{ fontWeight: "bolder", fontSize: "50px" }} >SERVICES</h1>
          <div class="d-inline-flex">
            <h5 ><Link to="/" style={{ textDecoration: "none", color: "white" }}>Home</Link></h5>
            <h5><pre style={{ color: "white" }}> / </pre></h5>
            <h5>Services</h5>
          </div>
        </Box>

      </Box>

        <Services />
        
    </Layout>
  )
}
