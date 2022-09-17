import './main.scss';
import { Home } from './pages/Home/Home';
import React from 'react';
import { Routes, Route, BrowserRouter, Link } from 'react-router-dom';
import { Cart } from './pages/Cart/Cart';

import { useSelector } from 'react-redux';

function App() {
    const cartList = useSelector((state) => state.cart.cart);

    return (
        <BrowserRouter>
            <div className="App">
                <div className="wrapper">
                    <header className="header">
                        <Link to="/">
                            <div className="header__info">
                                <div className="header__info-img">
                                    <img src="/icons/pizza-icon.svg" alt="Логотип" />
                                </div>
                                <div className="header__info-context">
                                    <h1 className="header__info-title">Portfolio Pizza</h1>
                                    <span className="header__info-text">
                                        самая вкусна пицца во вселенной
                                    </span>
                                </div>
                            </div>
                        </Link>
                        <Link to="cart">
                            <div className="header__cart">
                                <div className="header__cart-sum">
                                    {cartList.reduce(
                                        (acum, cur) => acum + cur.price * cur.amount,
                                        0,
                                    ) + '  '}
                                    ₴
                                </div>
                                <div className="header__cart-count">
                                    <div className="header__cart-img">
                                        <i className="fa-solid fa-cart-shopping"></i>
                                    </div>
                                    <span className="header__cart-value">{cartList.length}</span>
                                </div>
                            </div>
                        </Link>
                    </header>

                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="cart" element={<Cart />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
