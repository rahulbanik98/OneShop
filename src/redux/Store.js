import { configureStore } from "@reduxjs/toolkit";
import CartSlice from './slices/CartSlice';
import CategorySlice from "./slices/CategorySlice";
import SearchSlice from "./slices/SearchSlice";

const Store = configureStore({
    reducer: {
        CartSlice,
        CategorySlice,
        SearchSlice,
    }
})

export default Store;
