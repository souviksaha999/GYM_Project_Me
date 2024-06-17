import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import { Link, useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import Layout from '../Common/Layout';
import { registerUser } from '../Slice/AuthSlice';
import SubmitLoader from '../Common/SubmitLoader';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function Reg() {
  const [image, setImage] = React.useState()

  const { register, watch, reset, handleSubmit, formState: { errors } } = useForm()

  console.log(watch(["name", "email", "phone", "password", "answer"]))

  const dispatch = useDispatch()

  const {loading,redirectToLogin} = useSelector((state) => {
    console.log("Register_State....", state.auth)
    return state.auth
  })


  const imgChange = (e) => {
    setImage(e.target.files[0])
    console.log(e.target.files)
  }


  const onsubmit = (data) => {
    console.log("DATA...", data)
    const formData = new FormData()
    formData.append("name", data.name)
    formData.append("email", data.email)
    formData.append("phone", data.phone)
    formData.append("password", data.password)
    formData.append("answer", data.answer)
    formData.append("image", image)

    dispatch(registerUser(formData))
  }

  const navigate = useNavigate();

  React.useEffect(() => {
    const redirectUser = () => {
      let name = localStorage.getItem("name")
      let isInLoginPage = window.location.pathname.toLowerCase() === "/reg";
      if (name !== null && name !== undefined && name !== "") {
        isInLoginPage && navigate("/login");
      }
    }
    redirectUser();
  }, [redirectToLogin]);



  return (
    <Layout>
      <Box>
            <img src="bg.jpg" alt="" width="100%" height="350px" />
            <Box align='center' sx={{marginTop : "-200px", color:'white',  marginBottom: "130px" }}>
            <h1 style={{fontWeight : "bolder", fontSize : "50px"}} >GYMNASIUM</h1>
            <div class="d-inline-flex">
                <h5 ><Link to="/" style={{textDecoration : "none", color : "white"}}>Home</Link></h5>
                <h5><pre style={{color :"white"}}> / </pre></h5>
                <h5>Register</h5>
            </div>
            </Box>
           
        </Box>
      <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center', }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit(onsubmit)} sx={{ mt: 3 }}>
              <Grid container spacing={2}>

                <Grid item xs={12}>
                  <TextField required fullWidth id="name" label="Name" type='text'  {...register("name", { required: true })} />
                  <br />
                  {errors.name?.type === 'required' && <span style={{ color: "red" }}>Name is required</span>}
                </Grid>

                <Grid item xs={12}>
                  <TextField required fullWidth id="email" label="Email Address" type='email' {...register("email", { required: true })} />
                  <br />
                  {errors.email?.type === 'required' && <span style={{ color: "red" }}>Email is required</span>}

                </Grid>

                <Grid item xs={12}>
                  <TextField required fullWidth id="phone" label="Phone" type='number'  {...register("phone", { required: true })} />
                  <br />
                  {errors.phone?.type === 'required' && <span style={{ color: "red" }}>Phone is required</span>}
                </Grid>

                <Grid item xs={12}>
                  <TextField required fullWidth id="password" label="Password" type='password'  {...register("password", { required: true })} />
                  <br />
                  {errors.password?.type === 'required' && <span style={{ color: "red" }}>Password is required</span>}
                </Grid>

                <Grid item xs={12}>
                  <TextField required margin='normal' fullWidth id="answer" label="Answer" type="text" {...register("answer", { required: true })} />
                  <br />
                  {errors.answer?.type === 'required' && <span style={{ color: "red" }}>Answer is required</span>}
                </Grid>

                {/* <Grid item xs={12}>
                <TextField required margin= 'normal' fullWidth id="image"   type="file" {...register("image", { required: true })} />
                <br />
                {errors.image?.type === 'required' && <span style={{color : "red"}}>Image is required</span>}
                
                
            </Grid> */}

                <Grid item xs={12}>
                  <TextField required margin='normal' fullWidth id="image" type="file" name='image' accept="image/*" onChange={imgChange} />
                  <br />
                </Grid>
                {
                  image !== null && image !== undefined && image !== "" ? (
                    <> <img src={URL.createObjectURL(image)} alt="" height="180px" /> </>
                  ) : (<> {image === "" && <p>Drag And Drop Image</p>} </>)
                }


                <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} > {loading? <SubmitLoader /> : "Sign Up "} </Button>

                <Grid container justifyContent="flex-end">
                  <Grid item><Link to="/login"> Already have an account? Sign in </Link> </Grid>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Copyright sx={{ mt: 5 }} />
        </Container>
      </ThemeProvider>
    </Layout>

  );
}