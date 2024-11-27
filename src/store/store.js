import { configureStore } from "@reduxjs/toolkit";
import authSlicer from '../store/authSlice.js'

const store=configureStore({
    reducer:{
        auth:authSlicer
    }
  })

export default store