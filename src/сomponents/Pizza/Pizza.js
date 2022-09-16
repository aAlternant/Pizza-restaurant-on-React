import './pizza.scss';

import React from 'react';

import { useDispatch } from 'react-redux';
import { addItem } from '../../redux/slices/cart';

export const Pizza = ({ id, imageUrl, title, types, sizes, price, category, rating }) => {
    const typesDictionary = ['тонкое', 'традиционное'];
    const [type, setType] = React.useState(types[0]);
    const [size, setSize] = React.useState(sizes[0]);

    const dispatch = useDispatch();
    const addCartItem = (obj) => dispatch(addItem(obj));

    const handleSubmit = () => {
        addCartItem({
            id,
            imageUrl,
            title,
            type,
            size,
            price,
        });
    };

    return (
        <div className="items-block__pizza">
            <img className="items-block__pizza-img" src={imageUrl} alt={title} />
            <div className="items-block__pizza-title-outer">
                <h4 className="items-block__pizza-title">{title}</h4>
            </div>
            <div className="items-block__pizza-options">
                <div className="items-block__pizza-options__item">
                    {types.map((number) => (
                        <span
                            className={`items-block__pizza-options__switch ${
                                type === number ? 'selected' : ''
                            }`}
                            onClick={() => setType(number)}>
                            {typesDictionary[number]}
                        </span>
                    ))}
                </div>
                <div className="items-block__pizza-options__item items-block__pizza-options__item--second">
                    {sizes.map((value, index) => (
                        <span
                            className={`items-block__pizza-options__switch ${
                                value === size ? 'selected' : ''
                            }`}
                            onClick={() => setSize(value)}>
                            {value} см
                        </span>
                    ))}
                </div>
            </div>
            <div className="items-block__pizza-footer">
                <div className="items-block__pizza-footer__price">от {price} ₴</div>
                <button className="items-block__pizza-footer__button">
                    <div className="items-block__pizza-footer__button-img">
                        <i class="fa-solid fa-plus"></i>
                    </div>
                    <span
                        className="items-block__pizza-footer__button-text"
                        onClick={() => handleSubmit()}>
                        Добавить
                    </span>
                    <span className="items-block__pizza-footer__button-dot" />
                    <span className="items-block__pizza-footer__button-count">2</span>
                </button>
            </div>
        </div>
    );
};
