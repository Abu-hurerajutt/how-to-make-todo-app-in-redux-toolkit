import { createSlice } from "@reduxjs/toolkit";
import { addUser, Deletetodo, Edittodo } from "./userslice";
const adminSlice = createSlice({
    name:"admin",
    initialState:[],
    reducers:{

    },
    extraReducers(builder){
        builder.addCase(addUser, (state,action)=>{
            state.push(action.payload)
        })
        builder.addCase(Deletetodo,(state,action)=>{
            state.splice(action.payload,1)
    })
    builder.addCase(Edittodo,(state,action)=>{
        const {index,newtask} = action.payload
        if(state[index]){
            state[index]= newtask
        }
    })
    }
})
export default adminSlice.reducer;
