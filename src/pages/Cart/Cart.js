import { CartPizza } from '../../сomponents/CartPizza/CartPizza';
import './cart.scss';
import { useSelector } from 'react-redux';

export const Cart = () => {
    const cartItems = useSelector((state) => state.cart.items);

    return (
        <div className="cart">
            <div className="cart__inner">
                <div className="cart__header">
                    <div className="cart__header-title">
                        <i className="fa-solid fa-cart-shopping"></i>
                        <h2>Корзина</h2>
                    </div>
                    <div className="cart__header-cleaner">
                        <i class="fa-solid fa-trash"></i>
                        <span className="cart__header-cleaner-text">Очистить корзину</span>
                    </div>
                </div>

                <div className="cart__order-block">
                    <CartPizza />
                    <CartPizza />
                </div>

                <div className="cart__total">
                    <div className="cart__total__summary">
                        <span className="cart__total__summary-text">Всего пицц:</span>
                        <b className="cart__total__summary-value">3 шт.</b>
                    </div>
                    <div className="cart__total__price">
                        <span className="cart__total__price-text">Сумма заказа:</span>
                        <b className="cart__total__price-value">900 ₴</b>
                    </div>
                </div>

                <div className="cart__buttons-block">
                    <div className="cart__buttons-block__button cart__buttons-block__button--back">
                        <i class="fa-solid fa-angle-left"></i>
                        <span className="cart__buttons-block__button--back-text">
                            Вернуться назад
                        </span>
                    </div>
                    <div className="cart__buttons-block__button cart__buttons-block__button--pay">
                        <span className="cart__buttons-block__button--pay-text">
                            Оплатить сейчас
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};
