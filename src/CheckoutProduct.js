import React from "react";
import './CheckoutProduct.css';
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ id, title, price, image, rating }) {
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () =>{
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id
        })

    }
  return (
    <div className="checkoutProduct">
      <img src={image} alt="" className="checkoutProduct__img"/>
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>Ksh </small>
          <strong>{price}</strong>
        </p>
        <p className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              // eslint-disable-next-line
              <p>⭐</p>
            ))}
        </p>
        <button onClick={removeFromBasket}>Remove from Basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
