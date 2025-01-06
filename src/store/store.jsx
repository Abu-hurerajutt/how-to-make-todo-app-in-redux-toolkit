import { configureStore } from "@reduxjs/toolkit";
import userslice from "../features/userslice";
import adminSlice from "../features/adminslice"

const store = configureStore({
    reducer:{
        user: userslice,
        admin: adminSlice,
    }
})
export default store;