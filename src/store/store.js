import { configureStore } from "@reduxjs/toolkit";
import authSlicer from '../store/authSlice.js'
import companySlicer from '../store/companySlice.js'
const store=configureStore({
    reducer:{
        auth:authSlicer,
        company:companySlicer
    }
  })

export default store