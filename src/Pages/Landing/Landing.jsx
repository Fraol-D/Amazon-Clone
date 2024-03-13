import React from 'react'
import Carousels from '../../components/Carousel/Carousels';
import Category from '../../components/Category/Category';
import Product from '../../components/Product/Product';
import Layout from '../../components/Layout/Layout';

function Landing() {
  return (
    <Layout>
      <Carousels />
      <Category />
      <Product />
    </Layout>
  );
}

export default Landing