import { createSlice } from "@reduxjs/toolkit";
const authSlice=createSlice({
    initialState:{
        token:null,
        user:null
    },
    name:'auth',
    reducers:{
        logout:(state)=>{state.token=null,
            state.user=null
        },
        login:(state,action)=>{
            state.token=action.payload.token
            state.user=action.payload.user
        }
    }
})
export default authSlice.reducer
export const {login,logout} = authSlice.actions 