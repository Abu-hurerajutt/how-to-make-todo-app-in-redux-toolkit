import { configureStore } from "@reduxjs/toolkit";
import userslice from "../features/userslice";

const store = configureStore({
    reducer:{
        admin: userslice,
    }
})
export default store;