import React from 'react';
import './sort.scss';

export const Sort = ({ onClick }) => {
    const [open, setOpen] = React.useState(false);
    const [selected, setSelected] = React.useState(0);
    const sortList = ['популярности', 'цене', 'алфавиту'];

    return (
        <div className="navigator__sort">
            <div
                className={`navigator__sort-arrow navigator__sort-arrow--${open ? 'down' : 'up'}`}
            />
            <b className="navigator__sort-text">Сортировка по: </b>
            <span className="navigator__sort-filter" onClick={() => setOpen(!open)}>
                {sortList[selected]}
            </span>

            {open ? (
                <div className="navigator__sort__popup">
                    {sortList.map((sortName, index) => (
                        <span
                            className={`navigator__sort__popup-text ${
                                index === selected ? 'selected' : ''
                            }`}
                            onClick={() => {
                                setSelected(index);
                                onClick(index);
                                setOpen(!open);
                            }}>
                            {`по ${sortName}`}
                        </span>
                    ))}
                </div>
            ) : null}
        </div>
    );
};
