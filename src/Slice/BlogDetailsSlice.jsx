import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../AxiosInstance/Api";


export const blogDetailsfetch = createAsyncThunk("BlogDetails / Fetch", async(id, {rejectWithValue})=>{
    try {
        const response = await axiosInstance.get(`/getblogdetails/${id}`)
        console.log("BLOG_RESPONSE...", response)
        const result = response.data
        return result
    } catch (error) {
        return rejectWithValue(error)
    }
})

const BlogDetailsSlice = createSlice({
    name : "blogDetails",
    initialState : {
        data : [],
        loading : false,
        error : null
    },
    reducers : {},

    extraReducers : (builder)=>{
        builder.addCase(blogDetailsfetch.pending, (state)=>{
            state.loading = true
        })
        builder.addCase(blogDetailsfetch.fulfilled, (state,action)=>{
            state.loading = false;
            state.data = action.payload
        })
        builder.addCase(blogDetailsfetch.rejected, (state,action)=>{
            state.loading = false;
            state.error = action.payload
        })
    }
})

export default BlogDetailsSlice.reducer