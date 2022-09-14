import './pizza.scss';

export const Pizza = ({ id, imageUrl, title, types, sizes, price, category, rating }) => {
    const typesDictionary = ['тонкое', 'традиционное'];

    return (
        <div className="items-block__pizza">
            <img className="items-block__pizza-img" src={imageUrl} alt={title} />
            <div className="items-block__pizza-title-outer">
                <h4 className="items-block__pizza-title">{title}</h4>
            </div>
            <div className="items-block__pizza-options">
                <div className="items-block__pizza-options__item">
                    {types.map((v, index) => (
                        <span
                            className={`items-block__pizza-options__switch ${
                                index === 0 ? 'selected' : ''
                            }`}>
                            {typesDictionary[v]}
                        </span>
                    ))}
                </div>
                <div className="items-block__pizza-options__item items-block__pizza-options__item--second">
                    {sizes.map((value, index) => (
                        <span
                            className={`items-block__pizza-options__switch ${
                                index === 0 ? 'selected' : ''
                            }`}>
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
                    <span className="items-block__pizza-footer__button-text">Добавить</span>
                    <span className="items-block__pizza-footer__button-dot" />
                    <span className="items-block__pizza-footer__button-count">2</span>
                </button>
            </div>
        </div>
    );
};
