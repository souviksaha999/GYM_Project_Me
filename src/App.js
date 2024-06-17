import './App.css';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import Reg from './Accounts/Reg';
import Login from './Accounts/Login';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './Pages/Home';
import BlogPage from './Pages/BlogPage';
import TrainerPage from './Pages/TrainerPage';
import TestimonialsPage from './Pages/TestimonialsPage';
import ServicesPage from './Pages/ServicesPage';
import BlogDetails from './Pages/BlogDetails';
import ServiceDetailsPage from './Pages/ServiceDetailsPage';
import Booking from './Pages/Booking';
import { check_token } from './Slice/AuthSlice';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';



function App() {

  const PrivateRoute = ({children})=>{
    const token = localStorage.getItem("token") || sessionStorage.getItem("token")
    return token!== null && token!== undefined && token!== "" ? (
      children
    ) : ( <Navigate to="/login" />)
  }


  const PublicRoute = [
    {path : "/reg", component : <Reg/>},
    {path : "/login", component : <Login/>},
  ]
  const ProtectedRoute = [
    {path : "/", component : <Home/>},
    {path : "/blog", component : <BlogPage/>},
    {path : "/blogdetails/:id", component : <BlogDetails/>},
    {path : "/trainer", component : <TrainerPage/>},
    {path : "/testimonials", component : <TestimonialsPage/>},
    {path : "/services", component : <ServicesPage/>},
    {path : "/servicedetails/:id", component : <ServiceDetailsPage/>},
    {path : "/booking", component : <Booking/>},
  ]

  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(check_token())
  }, [])



  return (
    <>
    <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    <Router>
      <Routes>
        {
          PublicRoute.map((item,index)=>{
            return (
              <>
                <Route key={index} path={item.path} element = {item.component} />
              </>
            )
          })
        }
        {
          ProtectedRoute.map((item,index)=>{
            return (
              <>
                <Route key={index} path={item.path} element = {<PrivateRoute>{item.component}</PrivateRoute>} />
              </>
            )
          })
        }
        <Route  />
      </Routes>
    </Router>
    </>
  );
}

export default App;
