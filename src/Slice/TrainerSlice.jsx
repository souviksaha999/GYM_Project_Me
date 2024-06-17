import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../AxiosInstance/Api";


export const trainer = createAsyncThunk("Trainer", async(arg, {rejectWithValue})=>{
    try {
        const response = await axiosInstance.get("/gettrainer")
        console.log("TRAINER_RESPONSE...", response)
        const result = response.data
        return result
    } catch (error) {
        return rejectWithValue(error)
    }
})

const TrainerSlice = createSlice({
    name : "trainer",
    initialState : {
        data : [],
        loading : false,
        error : null
    },
    reducers : {},

    extraReducers : (builder)=>{
        builder.addCase(trainer.pending, (state)=>{
            state.loading = true
        })
        builder.addCase(trainer.fulfilled, (state,action)=>{
            state.loading = false;
            state.data = action.payload
        })
        builder.addCase(trainer.rejected, (state,action)=>{
            state.loading = false;
            state.error = action.payload
        })
    }
})

export default TrainerSlice.reducer