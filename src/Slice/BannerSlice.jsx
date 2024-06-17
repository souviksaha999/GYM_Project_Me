import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../AxiosInstance/Api";


export const banner = createAsyncThunk("Banner", async(arg, {rejectWithValue})=>{
    try {
        const response = await axiosInstance.get("/getbanner")
        console.log("BANNER_RESPONSE...", response)
        const result = response.data
        return result
    } catch (error) {
        return rejectWithValue(error)
    }
})

const BannerSlice = createSlice({
    name : "banner",
    initialState : {
        data : [],
        loading : false,
        error : null
    },
    reducers : {},

    extraReducers : (builder)=>{
        builder.addCase(banner.pending, (state)=>{
            state.loading = true
        })
        builder.addCase(banner.fulfilled, (state,action)=>{
            state.loading = false;
            state.data = action.payload
        })
        builder.addCase(banner.rejected, (state,action)=>{
            state.loading = false;
            state.error = action.payload
        })
    }
})

export default BannerSlice.reducer