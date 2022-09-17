import React from 'react';
import './categories.scss';

export const Categories = ({ onClick }) => {
    const [activeIndex, setActiveIndex] = React.useState(0);

    const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

    const handleSumbit = (index) => {
        onClick(index);
        setActiveIndex(index);
    };

    return (
        <div className="pizza-categories">
            {categories.map((item, index) => (
                <div
                    className={`pizza-categories__item ${activeIndex === index ? 'active' : ''}`}
                    onClick={() => handleSumbit(index)}
                    key={item}>
                    {item}
                </div>
            ))}
        </div>
    );
};
