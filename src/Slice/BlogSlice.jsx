import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../AxiosInstance/Api";


export const blogfetch = createAsyncThunk("Blog / Fetch", async(arg, {rejectWithValue})=>{
    try {
        const response = await axiosInstance.get("/getblog")
        console.log("BLOG_RESPONSE...", response)
        const result = response.data
        return result
    } catch (error) {
        return rejectWithValue(error)
    }
})

const BlogSlice = createSlice({
    name : "blog",
    initialState : {
        data : [],
        loading : false,
        error : null
    },
    reducers : {},

    extraReducers : (builder)=>{
        builder.addCase(blogfetch.pending, (state)=>{
            state.loading = true
        })
        builder.addCase(blogfetch.fulfilled, (state,action)=>{
            state.loading = false;
            state.data = action.payload
        })
        builder.addCase(blogfetch.rejected, (state,action)=>{
            state.loading = false;
            state.error = action.payload
        })
    }
})

export default BlogSlice.reducer