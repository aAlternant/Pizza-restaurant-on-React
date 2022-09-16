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
                amount: 1,
            });
        },

        removeItem(state, action) {
            let data = action.payload;
            state.cart = state.cart.filter((item) => item.id !== data);
        },

        setAmount(state, action) {
            let data = action.payload;

            state.cart.forEach((item) => {
                console.log(item);
                if (item.id === data.id) {
                    if (data.plus && item.amount < 5) {
                        item.amount = item.amount++;
                    }

                    if (item.amount >= 1) {
                        item.amount = item.amount++;
                    }
                }
            });
        },

        clearCart(state) {
            state.cart = [];
        },
    },
});

export const { addItem, removeItem, clearCart, setAmount } = cartSlice.actions;

export default cartSlice.reducer;
