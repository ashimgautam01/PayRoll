import { createSlice } from "@reduxjs/toolkit";

const initialState={
    data:null,
    status:false
}

const companySlicer=createSlice({
    name:"company",
    initialState,
    reducers:{
        getcompany:(state,action)=>{
            state.status=true,
            state.data=action.payload
            sessionStorage.setItem("company",JSON.stringify(action.payload))
        }
    }
})

export const {getcompany}=companySlicer.actions

export default companySlicer.reducer