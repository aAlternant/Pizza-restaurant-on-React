import { CartPizza } from '../../сomponents/CartPizza/CartPizza';
import './cart.scss';

export const Cart = () => {
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
            </div>
        </div>
    );
};
