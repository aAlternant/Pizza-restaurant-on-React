import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'pizza',
    initialState: {
        cart: [],
    },
    reducers: {
        addItem(state, action) {
            let data = action.payload;

            if (
                !state.cart.some(
                    (element) =>
                        element.id === data.id &&
                        element.size === data.size &&
                        element.type === data.type,
                )
            ) {
                state.cart.push({
                    id: data.id,
                    imageUrl: data.imageUrl,
                    title: data.title,
                    type: data.type,
                    size: data.size,
                    price: data.price,
                    amount: 1,
                });
            }
        },

        removeItem(state, action) {
            let data = action.payload;
            state.cart = state.cart.filter((item) => item.id !== data);
        },

        setAmount(state, action) {
            let data = action.payload;
            for (let index = 0; index < state.cart.length; index++) {
                const element = state.cart[index];

                if (
                    element.id === data.id &&
                    element.size === data.size &&
                    element.type === data.type &&
                    element.amount < 5 &&
                    data.set === 'plus'
                ) {
                    element.amount++;
                }

                if (
                    element.id === data.id &&
                    element.size === data.size &&
                    element.type === data.type &&
                    element.amount > 1 &&
                    data.set === 'minus'
                ) {
                    element.amount--;
                }
            }
        },

        clearCart(state) {
            state.cart = [];
        },
    },
});

export const { addItem, removeItem, clearCart, setAmount } = cartSlice.actions;

export default cartSlice.reducer;
