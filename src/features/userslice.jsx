import { createSelector, createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:"user",
    initialState:[],
    reducers:{
        addUser(state,action){
            state.push(action.payload)
        },
        Deletetodo(state,action){
            state.splice(action.payload,1)
        },
        Removeall(state,action){
            state.splice(0,state.length)
        },
        Edittodo(state,action){
            const {index,newtask} = action.payload;
            if(state[index]){
                state[index] = newtask;
            }
        }
    },
    
})
export default userSlice.reducer;
export const {addUser,Deletetodo,Removeall,Edittodo} = userSlice.actions