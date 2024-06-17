import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../AxiosInstance/Api";
import { toast } from 'react-toastify';


export const bookServices = createAsyncThunk("Book / Services", async(data, {rejectWithValue})=>{
    try {
        const response =  await axiosInstance.post("/booking",data)
        console.log("BOOK_SERVICES_RESPONSE.....", response)
        const result = response.data
        return result      
    } catch (error) {
        return rejectWithValue(error)
    }
})


const BookServicesSlice = createSlice({
    name : "bookservices",
    initialState : {
        data : [],
        loading : false,
        error : null,
    },
    reducers : {},

    extraReducers : (builder)=>{
        builder.addCase(bookServices.pending, (state)=>{
            state.loading = true
        })
        builder.addCase(bookServices.fulfilled, (state,action)=>{
            state.loading = false;
            state.data = action.payload
            if (action.payload.success === true) {
                toast.success(action.payload.message)
            }
        })
        builder.addCase(bookServices.rejected, (state,action)=>{
            state.loading = false;
            state.error = action.payload
            if (action.payload){
                toast.error(action.payload.message)
            }
        })

    }
})


export default BookServicesSlice.reducer