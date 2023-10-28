import { configureStore } from "@reduxjs/toolkit";
import CartSlice from './slices/CartSlice';
import CategorySlice from "./slices/CategorySlice";

const Store = configureStore({
    reducer: {
        CartSlice,
        CategorySlice: CategorySlice
    }
})

export default Store;
