import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../AxiosInstance/Api";


export const services = createAsyncThunk("Services", async(arg, {rejectWithValue})=>{
    try {
        const response = await axiosInstance.get("/getservice")
        console.log("SERVICES_RESPONSE...", response)
        const result = response.data
        return result
    } catch (error) {
        return rejectWithValue(error)
    }
})

const ServiceSlice = createSlice({
    name : "services",
    initialState : {
        data : [],
        loading : false,
        error : null
    },
    reducers : {},

    extraReducers : (builder)=>{
        builder.addCase(services.pending, (state)=>{
            state.loading = true
        })
        builder.addCase(services.fulfilled, (state,action)=>{
            state.loading = false;
            state.data = action.payload
        })
        builder.addCase(services.rejected, (state,action)=>{
            state.loading = false;
            state.error = action.payload
        })
    }
})

export default ServiceSlice.reducer