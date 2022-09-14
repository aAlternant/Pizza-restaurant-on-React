import { Pizza } from '../../сomponents/Pizza/Pizza';
import { Categories } from '../../сomponents/Categories/Categories';
import axios from 'axios';
import React from 'react';

import { Sort } from '../../сomponents/Sort/Sort';
import { Skeleton } from '../../сomponents/Skeleton';

export const Home = (props) => {
    // pizzaList = pizzaList.parse();

    let accessToken = '$2b$10$uBj438wgU4RcspxBgVwlzOxFdHwpbO.I.ZIcT58Su5fGWUO9Y1UQi';

    const [itemsList, setItemsList] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    const getData = async () => {
        const { data } = await axios.get('https://api.jsonbin.io/v3/b/6321da05a1610e63862ad855', {
            headers: {
                'X-Master-Key': accessToken,
            },
        });
        setItemsList(data.record);
        setLoading(false);
    };

    React.useEffect(() => {
        getData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <section className="navigator">
                <Categories />
                <Sort />
            </section>

            <section className="items-block">
                <h2 className="items-block__header">Все пиццы</h2>
                <div className="items-block__inner">
                    {loading
                        ? [...Array(12)].map(() => <Skeleton />)
                        : itemsList.map((pizza) => (
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
