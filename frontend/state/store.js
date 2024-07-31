import { configureStore } from "@reduxjs/toolkit";
import quoteReducer from './quotesSlice'

export const store = configureStore({
    reducer: {
        quotesState: quoteReducer,
    } 
})
