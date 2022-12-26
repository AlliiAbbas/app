import { configureStore } from "@reduxjs/toolkit";
import providerSlice from "./providerSlice";

const store = configureStore({
    reducer : {
      addInfo : providerSlice
    }
})


export default store