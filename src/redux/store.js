import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './slices/cart';
import { authReducer } from './slices/auth';

export default configureStore({
    reducer: {
        cart: cartReducer,
        auth: authReducer,
    },
});
