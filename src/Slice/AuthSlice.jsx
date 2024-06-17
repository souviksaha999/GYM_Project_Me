import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../AxiosInstance/Api";
import { toast } from 'react-toastify';


export const registerUser = createAsyncThunk("register / User", async(data, {rejectWithValue})=>{
    try {
        const response =  await axiosInstance.post("/register",data)
        console.log("REGISTER_RESPONSE.....", response)
        const result = response.data
        return result      
    } catch (error) {
        return rejectWithValue(error)
    }
})

export const logInUser = createAsyncThunk("login / User", async(data, {rejectWithValue})=>{
    try {
        // const response =  await axiosInstance("/login",data)
        const response =  await axiosInstance.post("/login",data)
        console.log("LOGIN_RESPONSE.....", response)
        const result = response.data
        return result      
    } catch (error) {
        return rejectWithValue(error)
    }
})

const AuthSlice = createSlice({
    name : "auth",
    initialState : {
        data : [],
        loading : false,
        error : null,
        redirectreg : null,
        logoutToggle : false,
        redirectToLogin : null,
        redirectToHome : null,
    },
    reducers : {

        logOut : (state,action)=>{
            localStorage.removeItem("name");
            localStorage.removeItem("token");
            localStorage.removeItem("userId");
            state.logoutToggle = false
        },
        regLogout : (state,action)=>{
            localStorage.removeItem("name")
        },
        check_token: (state, { payload }) => {
            let token = localStorage.getItem("token");
            if (token !== null && token !== undefined) {
                state.logoutToggle = true;
            }
        },
        loginNavigate : (state,action)=>{
            state.redirectToLogin = action.payload;
        },
        homeNavigate : (state,action)=>{
            state.redirectToHome = action.payload;
        }, 
    },

    extraReducers : (builder)=>{
        builder.addCase(registerUser.pending, (state)=>{
            state.loading = true
        })
        builder.addCase(registerUser.fulfilled, (state,action)=>{
            state.loading = false;
            state.data = action.payload
            if (action.payload.success === true) {
                toast.success(action.payload.message)
                localStorage.setItem("name",action.payload.savedMember.name)
                state.redirectToLogin = "/login"
            }
        })
        builder.addCase(registerUser.rejected, (state,action)=>{
            state.loading = false;
            state.error = action.payload
            if (action.payload){
                toast.error(action.payload.message)
            }
        })



        builder.addCase(logInUser.pending, (state)=>{
            state.loading = true
        })
        builder.addCase(logInUser.fulfilled, (state,action)=>{
            state.loading = false;
            state.data = action.payload
            if (action.payload.status === 200) {
                toast.success(action.payload.message)
                localStorage.setItem("name",action?.payload?.data?.name)
                localStorage.setItem("token",action?.payload?.token)
                localStorage.setItem("userId",action?.payload?.data?._id)
                state.redirectToHome = "/"
                state.logoutToggle = true
            }
        })
        builder.addCase(logInUser.rejected, (state,action)=>{
            state.loading = false;
            state.error = action.payload
            if (action.payload){
                toast.error(action.payload.message)
            }
        })
    }
})

export const {logOut, regLogout, check_token, loginNavigate, homeNavigate} = AuthSlice.actions

export default AuthSlice.reducer