import React from 'react';
import sampleData from '@/db/sample-data';
import ProductList from '@/components/shared/product/product-list';

function Homepage() {
  return (
    <>
      <ProductList
        data={sampleData.products}
        title="Newest Arrivals"
        limit={4}
      />
    </>
  );
}

export default Homepage;
