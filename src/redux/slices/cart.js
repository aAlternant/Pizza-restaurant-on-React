import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'pizza',
    initialState: {
        cart: [],
    },
    reducers: {
        addItem(state, action) {
            let data = action.payload;
            state.cart.push({
                id: data.id,
                imageUrl: data.imageUrl,
                title: data.title,
                type: data.type,
                size: data.size,
                price: data.price,
                amount: 0,
            });
        },
        removeItem(state, action) {
            let data = action.payload;
            state.cart = state.cart.filter((item) => item.id !== data);
        },
        clearCart(state) {
            state.cart = [];
        },
    },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
