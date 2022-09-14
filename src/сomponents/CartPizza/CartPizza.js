import '../../pages/Cart/cart.scss';

export const CartPizza = () => {
    return (
        <div className="cart__order-block__item">
            <img
                src="https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/2ffc31bb-132c-4c99-b894-53f7107a1441.jpg"
                alt=""
                className="cart__order-block__item-img"
            />
            <div className="cart__order-block__item-info">
                <b className="cart__order-block__item-info-title">Сырный цыпленок</b>
                <span className="cart__order-block__item-info-description">
                    тонкое тесто, 26 см.
                </span>
            </div>
            <div className="cart__order-block__item-options">
                <i class="fa-solid fa-circle-minus"></i>
                <b className="cart__order-block__item-options-value">2</b>
                <i class="fa-solid fa-circle-plus"></i>
            </div>
            <b className="cart__order-block__item-price">770 ₴</b>
            <i class="fa-solid fa-circle-xmark"></i>
        </div>
    );
};
