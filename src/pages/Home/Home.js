import { Pizza } from '../../сomponents/Pizza/Pizza';
import { Categories } from '../../сomponents/Categories/Categories';
import axios from 'axios';
import React from 'react';

import { Sort } from '../../сomponents/Sort/Sort';
import { Skeleton } from '../../сomponents/Skeleton';

export const Home = () => {
    let accessToken = '$2b$10$uBj438wgU4RcspxBgVwlzOxFdHwpbO.I.ZIcT58Su5fGWUO9Y1UQi';

    const [itemsList, setItemsList] = React.useState([]);
    const [categoryItems, setCategoryItems] = React.useState([]);
    const [sortedItems, setSortedItems] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    const [useList, setUseList] = React.useState(0);

    // Get pizza by server

    const getData = async () => {
        try {
            const { data } = await axios.get(
                'https://api.jsonbin.io/v3/b/6321da05a1610e63862ad855',
                {
                    headers: {
                        'X-Master-Key': accessToken,
                    },
                },
            );
            setItemsList(data.record);
            setUseList(0);
            setLoading(false);
        } catch (error) {
            alert('Возникла ошибка! Просим позвонить нам!');
        }
    };

    // Filter by category

    const onClickCategories = (index) => {
        let filteredItemsList = itemsList.filter((pizza) =>
            index === 0 ? pizza : pizza.category === index,
        );
        setCategoryItems(filteredItemsList);
        setUseList(1);
    };

    // Sort by selected setting

    const onClickSort = (index) => {
        let sortedItemsList = [];
        switch (index) {
            case 0:
                sortedItemsList = itemsList.slice().sort((a, b) => (a.rating > b.rating ? 1 : -1));
                setSortedItems(sortedItemsList);
                break;
            case 1:
                sortedItemsList = itemsList.slice().sort((a, b) => (a.price > b.price ? 1 : -1));
                setSortedItems(sortedItemsList);
                break;
            case 2:
                sortedItemsList = itemsList.slice().sort((a, b) => a.title.localeCompare(b.title));
                setSortedItems(sortedItemsList);
                break;
            default:
                break;
        }
        setUseList(2);
    };

    // Current list render

    function takeSelectedList() {
        switch (useList) {
            case 0:
                return itemsList;
            case 1:
                return categoryItems;
            case 2:
                return sortedItems;
            default:
                break;
        }
    }

    React.useEffect(() => {
        getData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <section className="navigator">
                <Categories onClick={onClickCategories} />
                <Sort onClick={onClickSort} />
            </section>

            <section className="items-block">
                <h2 className="items-block__header">Все пиццы</h2>
                <div className="items-block__inner">
                    {loading
                        ? [...Array(12)].map(() => <Skeleton />)
                        : takeSelectedList().map((pizza) => (
                              <Pizza
                                  id={pizza.id}
                                  title={pizza.title}
                                  imageUrl={pizza.imageUrl}
                                  types={pizza.types}
                                  sizes={pizza.sizes}
                                  price={pizza.price}
                                  category={pizza.category}
                                  rating={pizza.rating}
                                  key={pizza.id}
                              />
                          ))}
                </div>
            </section>
        </>
    );
};
