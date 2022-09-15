import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
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
                type: data.types,
                size: data.sizes,
                price: data.price,
                amount: 0,
            });
        },
        removeItem(state, action) {},
    },
});

export const { addItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
