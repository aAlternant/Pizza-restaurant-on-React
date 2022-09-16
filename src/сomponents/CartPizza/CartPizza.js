import '../../pages/Cart/cart.scss';
import React from 'react';

import { removeItem, setAmount } from '../../redux/slices/cart';
import { useDispatch } from 'react-redux';

export const CartPizza = ({ title, imageUrl, price, type, size, id, amount }) => {
    const typeDictionary = ['тонкое', 'традиционное'];

    const dispatch = useDispatch();

    return (
        <div className="cart__order-block__item">
            <img src={imageUrl} alt={title} className="cart__order-block__item-img" />
            <div className="cart__order-block__item-info">
                <b className="cart__order-block__item-info-title">{title}</b>
                <span className="cart__order-block__item-info-description">
                    {typeDictionary[type]} тесто, {size} см.
                </span>
            </div>
            <div className="cart__order-block__item-options">
                <i
                    className="fa-solid fa-circle-minus"
                    onClick={() => dispatch(setAmount({ id, plus: false }))}></i>
                <b className="cart__order-block__item-options-value">{amount}</b>
                <i
                    className="fa-solid fa-circle-plus"
                    onClick={() => dispatch(setAmount({ id, plus: true }))}></i>
            </div>
            <b className="cart__order-block__item-price">{price} ₴</b>
            <i className="fa-solid fa-circle-xmark" onClick={() => dispatch(removeItem(id))}></i>
        </div>
    );
};
