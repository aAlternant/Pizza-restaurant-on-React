import { Pizza } from '../../сomponents/Pizza/Pizza';
import { Categories } from '../../сomponents/Categories/Categories';
import axios from 'axios';
import React from 'react';

import pizzaList from '../../assets/pizza.json';
import { Sort } from '../../сomponents/Sort/Sort';

export const Home = (props) => {
    // pizzaList = pizzaList.parse();

    console.log(pizzaList);

    const [itemsList, setItemsList] = React.useState(pizzaList);

    // React.useEffect(async () => {
    //     const { data } = await axios.get();
    // }, [])

    return (
        <>
            <section className="navigator">
                <Categories />
                <Sort />
            </section>

            <section className="items-block">
                <h2 className="items-block__header">Все пиццы</h2>
                <div className="items-block__inner">
                    {itemsList.map((pizza) => (
                        <Pizza
                            id={pizza.id}
                            title={pizza.title}
                            imageUrl={pizza.imageUrl}
                            types={pizza.types}
                            sizes={pizza.sizes}
                            price={pizza.price}
                            category={pizza.category}
                            rating={pizza.rating}
                        />
                    ))}
                </div>
            </section>
        </>
    );
};
