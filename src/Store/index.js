import { configureStore } from "@reduxjs/toolkit";
import auth from './Slices/authSlice'
import cart from './Slices/cartSlice'
const store=configureStore({
    reducer:{
        auth,cart
    }
})
export default store