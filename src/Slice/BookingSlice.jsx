import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../AxiosInstance/Api";


export const bookingfetch = createAsyncThunk("Booking / Fetch", async(arg, {rejectWithValue})=>{
    try {
        // const response = await axiosInstance.get(`/viewBooking/657c980c8c0deb2b4a8d4387`)
        const response = await axiosInstance.get(`/viewBooking/${localStorage.getItem("userId")}`)
        console.log("BOOKING_RESPONSE...", response)
        const result = response.data
        return result
    } catch (error) {
        return rejectWithValue(error)
    }
})

const BookingSlice = createSlice({
    name : "booking",
    initialState : {
        data : [],
        loading : false,
        error : null
    },
    reducers : {},

    extraReducers : (builder)=>{
        builder.addCase(bookingfetch.pending, (state)=>{
            state.loading = true
        })
        builder.addCase(bookingfetch.fulfilled, (state,action)=>{
            state.loading = false;
            state.data = action.payload
        })
        builder.addCase(bookingfetch.rejected, (state,action)=>{
            state.loading = false;
            state.error = action.payload
        })
    }
})

export default BookingSlice.reducer