import { useRef } from 'react';
import './login.scss';
import { fetchLogin, selectorIsAuth } from '../../redux/slices/auth';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router';

export const Login = () => {
    const dispatch = useDispatch();

    const isAuth = useSelector(selectorIsAuth);

    const email = useRef('');
    const password = useRef('');

    const handleSubmit = async (obj) => {
        const data = await dispatch(fetchLogin(obj));

        if (!data.payload) {
            return alert('Login failed');
        }
        if ('token' in data.payload) {
            window.localStorage.setItem('token', data.payload.token);
        } else {
            return alert('Login failed');
        }
    };

    if (isAuth) {
        <Navigate to="/adminpanel" />;
    }

    return (
        <form className="login">
            <div className="login__inner">
                <h2>Admin Panel</h2>
                <div className="login__cell">
                    <input
                        ref={email}
                        type="email"
                        name="email"
                        className="login__email-input"
                        placeholder="Enter your email..."
                    />
                </div>
                <div className="login__cell">
                    <input
                        ref={password}
                        type="password"
                        name="email"
                        className="login__password-input"
                        placeholder="Enter your password..."
                    />
                </div>
                <button
                    className="login__button"
                    type="button"
                    onClick={() =>
                        handleSubmit({
                            email: email.current.value,
                            password: password.current.value,
                        })
                    }>
                    Login
                </button>
            </div>
        </form>
    );
};
