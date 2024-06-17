import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../AxiosInstance/Api";


export const testimonial = createAsyncThunk("Testimonial", async(arg, {rejectWithValue})=>{
    try {
        const response = await axiosInstance.get("/gettestimonial")
        console.log("TESTIMONIAL_RESPONSE...", response)
        const result = response.data
        return result
    } catch (error) {
        return rejectWithValue(error)
    }
})

const TestimonialSlice = createSlice({
    name : "testimonial",
    initialState : {
        data : [],
        loading : false,
        error : null
    },
    reducers : {},

    extraReducers : (builder)=>{
        builder.addCase(testimonial.pending, (state)=>{
            state.loading = true
        })
        builder.addCase(testimonial.fulfilled, (state,action)=>{
            state.loading = false;
            state.data = action.payload
        })
        builder.addCase(testimonial.rejected, (state,action)=>{
            state.loading = false;
            state.error = action.payload
        })
    }
})

export default TestimonialSlice.reducer