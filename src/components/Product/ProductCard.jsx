/* eslint-disable no-unused-vars */
import React, {useContext } from "react";
import Rating from "@mui/material/Rating";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
import classes from './Product.module.css'
import { Link } from "react-router-dom";
import { type } from "../../Utility/action.type";
import { DataContext } from "../DataProvider/DataProvider";

function ProductCard({ product, flex, renderDesc, renderAdd }) {
  const { image, title, id, rating, price, description } = product;
  
  const [state, dispatch] = useContext(DataContext);
  
  
  let addToCart = () => {
    dispatch({
      type: type.ADD_TO_BASKET,
      item: {
        image,
        title,
        id,
        rating,
        price,
        description,
      },
    });
    
  }
  
  const ratingValue = rating?.rate || 4;
  const ratingCount = rating?.count || 0;

  return (
    <div
      className={`${classes.card__container} ${
        flex ? classes.product__flexed : ""
      }`}
    >
      <Link to={`/products/${id}`}>
        <img src={image} alt={title} />
      </Link>
      <div>
        <div>
          <h3>{title}</h3>
          {renderDesc && <div style={{ maxWidth: "750px" }}>{description}</div>}
        </div>
        <div className={classes.rating}>
          {/* Rating */}
          <Rating value={ratingValue} precision={0.1} />
          {/* Count */}
          <small>{ratingCount}</small>
        </div>
        {/* Price */}
        <div>
          <CurrencyFormat amount={price} />
        </div>
        {
          renderAdd && 
          <button className={classes.button} onClick={addToCart}>
            add to cart
          </button>
        }
      </div>
    </div>
  );
}

export default ProductCard;
