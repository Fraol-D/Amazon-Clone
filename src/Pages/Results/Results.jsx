import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import { useParams } from "react-router-dom";
import axios from "axios";
import { productUrl } from "../../Api/endPoints";
import classes from "./Results.module.css";
import ProductCard from "../../components/Product/ProductCard";
import Loader from "../../components/Loader/Loader";


function Results() {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false); 
  const { categoryName } = useParams()
  useEffect(() => {
    setLoading(true)
      console.log("Category Name:", categoryName);
    axios
      .get(`${productUrl}/products/category/${categoryName}`)
      .then((res) => {
        setLoading(false)
       setResults(res.data);

      })
      .catch((err) => {
        console.error("Error fetching products:", err);
        setLoading(false)
      });
  }, [categoryName]);
  
console.log("Results:", results);

return (
  <Layout>
    <section>
      <h1 style={{ padding: "30px" }}>Results</h1>
      <p style={{ padding: "30px" }}>Category / {categoryName}</p>
      <hr />
      {loading ? (
        <Loader />
      ):(
          <div className={classes.products_container}>
          {results.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              renderDesc={false}
              renderAdd={true}
            />)
      )}
        </div>
      )}
    </section>
  </Layout>
);

}

export default Results;
