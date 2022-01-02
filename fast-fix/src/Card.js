import { Button } from '@material-ui/core';
import React from 'react';
import './Card.css'
import { useStateValue } from './StateProvider';

function Card({ src, title, description, price }) {
   const [state, dispatch] = useStateValue();
    const addToCart = () => {
        dispatch({
            type: 'ADD_TO_CART',
            item: {
                src: src,
                title: title,
                description: description,
                price: price,

            },
        });

   };
    return (
        <div className='card'>
            <img src={src} alt="" />
            <div className="card__info">
                <h2>{title}</h2>
                <h4>{description}</h4>
                <h3>{price}</h3>
            </div>
            <Button onClick={addToCart}>Add to Cart</Button>
        </div>
    )
}

export default Card