import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartInitialState: []
    },
    reducers: {
        addToCart: (state, action) => {
            const exisItem = state.cartInitialState.find((item) => item.id === action.payload.id)
            if (exisItem) {
                state.cartInitialState = state.cartInitialState.map((item) =>
                    item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item
                );
            } else {
                state.cartInitialState.push(action.payload)
            }
        },
        removeFromCart: (state, action) => {
            state.cartInitialState = state.cartInitialState.filter((item) => item.id !== action.payload)
        },
        incrementQty: (state, action) => {
            state.cartInitialState = state.cartInitialState.map((item) => item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item
            )
        },
        decrementQty: (state, action) => {
            state.cartInitialState = state.cartInitialState.map((value) =>
                value.id === action.payload.id ? { ...value, qty: value.qty - 1 } : value
            )
        }
    }
})

export const { addToCart, removeFromCart, incrementQty, decrementQty } = CartSlice.actions;
export default CartSlice.reducer;

