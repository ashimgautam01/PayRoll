import { createSlice } from "@reduxjs/toolkit";


const initialState={
    status:false,
    data:null
}

const authSlicer=createSlice({
    name:'auth',
    initialState,
    reducers:{
        login:(state,action)=>{
            state.status=true,
            state.data=action.payload
            
        },
        logout:(state)=>{
            state.status=false,
            state.data=null
        }
    }
})

export const {login,logout}=authSlicer.actions


export default authSlicer.reducer