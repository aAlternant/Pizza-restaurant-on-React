import { CartPizza } from '../../сomponents/CartPizza/CartPizza';
import './cart.scss';
import { useSelector } from 'react-redux';

import { clearCart } from '../../redux/slices/cart';
import { useDispatch } from 'react-redux';

import { Link } from 'react-router-dom';

export const Cart = () => {
    const cartItems = useSelector((state) => state.cart.cart);

    const dispatch = useDispatch();

    return (
        <div className="cart">
            <div className="cart__inner">
                <div className="cart__header">
                    <div className="cart__header-title">
                        <i className="fa-solid fa-cart-shopping"></i>
                        <h2>Корзина</h2>
                    </div>
                    <div className="cart__header-cleaner">
                        <i className="fa-solid fa-trash"></i>
                        <span
                            className="cart__header-cleaner-text"
                            onClick={() => dispatch(clearCart())}>
                            Очистить корзину
                        </span>
                    </div>
                </div>

                <div className="cart__order-block">
                    {cartItems.map((pizza) => (
                        <CartPizza
                            id={pizza.id}
                            title={pizza.title}
                            imageUrl={pizza.imageUrl}
                            type={pizza.type}
                            size={pizza.size}
                            price={pizza.price}
                            key={pizza.id}
                            amount={pizza.amount}
                        />
                    ))}
                </div>

                <div className="cart__total">
                    <div className="cart__total__summary">
                        <span className="cart__total__summary-text">Всего пицц:</span>
                        <b className="cart__total__summary-value">{cartItems.length} шт.</b>
                    </div>
                    <div className="cart__total__price">
                        <span className="cart__total__price-text">Сумма заказа:</span>
                        <b className="cart__total__price-value">
                            {cartItems.reduce((acum, cur) => acum + cur.price * cur.amount, 0)} ₴
                        </b>
                    </div>
                </div>

                <div className="cart__buttons-block">
                    <Link to="/">
                        <div className="cart__buttons-block__button cart__buttons-block__button--back">
                            <i className="fa-solid fa-angle-left"></i>
                            <span className="cart__buttons-block__button--back-text">
                                Вернуться назад
                            </span>
                        </div>
                    </Link>
                    <Link to="/pay/:id">
                        <div className="cart__buttons-block__button cart__buttons-block__button--pay">
                            <span className="cart__buttons-block__button--pay-text">
                                Оплатить сейчас
                            </span>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};
