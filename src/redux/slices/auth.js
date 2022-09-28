import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../assets/axios';

export const fetchRegistration = createAsyncThunk(
    '/adminpanel/fetchRegistration',
    async (params) => {
        const { data } = await axios.post('/adminpanel/list/register', params);

        return data;
    },
);

export const fetchAuthMe = createAsyncThunk('/adminpanel/fetchAuth', async (params) => {
    const { data } = await axios.get('/adminpanel/auth/me');

    return data;
});

export const fetchLogin = createAsyncThunk('/adminpanel/fetchLogin', async (params) => {
    const { data } = await axios.post('/adminpanel/login', params);

    return data;
});

const initialState = {
    data: null,
    status: 'loading',
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            state.data = null;
            window.localStorage.removeItem('token');
        },
    },
    extraReducers: {
        // Login
        [fetchLogin.pending]: (state, actions) => {
            state.status = 'loading';
            state.data = null;
        },
        [fetchLogin.fulfilled]: (state, actions) => {
            state.status = 'loaded';
            state.data = actions.payload;
        },
        [fetchLogin.rejected]: (state, actions) => {
            state.status = 'error';
            state.data = null;
        },
        // Check auth
        [fetchAuthMe.pending]: (state, actions) => {
            state.status = 'loading';
            state.data = null;
        },
        [fetchAuthMe.fulfilled]: (state, actions) => {
            state.status = 'loaded';
            state.data = actions.payload;
        },
        [fetchAuthMe.rejected]: (state, actions) => {
            state.status = 'error';
            state.data = null;
        },
        // Registration
        [fetchRegistration.pending]: (state, actions) => {
            state.status = 'loading';
            state.data = null;
        },
        [fetchRegistration.fulfilled]: (state, actions) => {
            state.status = 'loaded';
            state.data = actions.payload;
        },
        [fetchRegistration.rejected]: (state, actions) => {
            state.status = 'error';
            state.data = null;
        },
    },
});

export const selectorIsAuth = (state) => Boolean(state.auth.data);

export const authReducer = authSlice.reducer;

export const { logout } = authSlice.actions;
