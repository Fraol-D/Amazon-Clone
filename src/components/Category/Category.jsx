/* eslint-disable array-callback-return */

import React from "react";
import { categoryInfos } from "./categoryFullInfos";
import CategoryCard from "./CategoryCard";
import classes from './category.module.css'

function Category() {
  return (
    <section className={classes.category__container}>
      {categoryInfos.map((infos) => (
        <CategoryCard key={infos.id} data={infos} />
      ))}
      <br />
      <br />
      <br />
      <br />
    </section>
  );
}

export default Category;
