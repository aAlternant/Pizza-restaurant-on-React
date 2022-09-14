import React from 'react';
import './categories.scss';

export const Categories = () => {
    const [activeIndex, setActiveIndex] = React.useState(0);

    const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

    return (
        <div className="pizza-categories">
            {categories.map((item, index) => (
                <div
                    className={`pizza-categories__item ${activeIndex === index ? 'active' : ''}`}
                    onClick={() => setActiveIndex(index)}>
                    {item}
                </div>
            ))}
        </div>
    );
};
