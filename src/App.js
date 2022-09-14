import './main.scss';
import { Home } from './pages/Home/Home';
import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <div className="wrapper">
                <header className="header">
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
                    <div className="header__cart">
                        <div className="header__cart-sum">530 ₴</div>
                        <div className="header__cart-count">
                            <div className="header__cart-img">
                                <i className="fa-solid fa-cart-shopping"></i>
                            </div>
                            <span className="header__cart-value">3</span>
                        </div>
                    </div>
                </header>

                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home />} />
                    </Routes>
                </BrowserRouter>
            </div>
        </div>
    );
}

export default App;
