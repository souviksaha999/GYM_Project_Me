import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../AxiosInstance/Api";


export const serviceDetailsfetch = createAsyncThunk("ServiceDetails / Fetch", async(id, {rejectWithValue})=>{
    try {
        const response = await axiosInstance.get(`/getservicedetails/${id}`)
        console.log("SERVICE_RESPONSE...", response)
        const result = response.data
        return result
    } catch (error) {
        return rejectWithValue(error)
    }
})

const ServiceDetailsSlice = createSlice({
    name : "serviceDetails",
    initialState : {
        data : [],
        loading : false,
        error : null
    },
    reducers : {},

    extraReducers : (builder)=>{
        builder.addCase(serviceDetailsfetch.pending, (state)=>{
            state.loading = true
        })
        builder.addCase(serviceDetailsfetch.fulfilled, (state,action)=>{
            state.loading = false;
            state.data = action.payload
        })
        builder.addCase(serviceDetailsfetch.rejected, (state,action)=>{
            state.loading = false;
            state.error = action.payload
        })
    }
})

export default ServiceDetailsSlice.reducer