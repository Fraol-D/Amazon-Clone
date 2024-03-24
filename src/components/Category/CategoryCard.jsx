import React from 'react'
import classes from './category.module.css'
import { Link } from 'react-router-dom';


function CategoryCard({ data }) {
  return (
    <div className={classes.category__wrapper}>
      <div className={classes.category}>
        <Link to={`/category/${data.title}`}>
          <span>
            <h2>{data?.title}</h2>
          </span>
          <img src={data?.image} alt="" />
          <p>shop now</p>
        </Link>
      </div>
    </div>
  );
}

export default CategoryCard