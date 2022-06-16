import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';

import Grid from './Grid';
import ProductCard from './ProductCard';
import { GlobalState } from '../GlobalState';
import InfiniteScroll from 'react-infinite-scroll-component';
import axios from 'axios';

const InfinityList = () => {
  const state = useContext(GlobalState);
  const [products, setProducts] = state.productsAPI.products;
  const [hasMore, setHasMore] = useState(true);
  const fetchProducts = async () => {
    const res = await axios.get(`/api/products`);
    return res.data.products;
  };
  const fetchData = async () => {
    const productFromServer = await fetchProducts();
    setProducts([...products, ...productFromServer]);
    setHasMore(false);
  };
  return (
    <InfiniteScroll
      dataLength={products.length}
      next={fetchData}
      hasMore={hasMore}
    >
      {
        <Grid
          col={4}
          mdCol={3}
          smCol={2}
          gap={20}
        >
          {products.map((products, index) => {
            return (
              <ProductCard
                key={index}
                id={products._id}
                name={products.title}
                price={products.price}
                old_price={products.old_price}
                discount={products.discount}
                image01={products.image01.url}
                image02={products.image02.url}
                checked={products.checked}
                color={products.color}
                size={products.size}
                sold={products.sold}
              />
            );
          })}
        </Grid>
      }
    </InfiniteScroll>
  );
};

InfinityList.propTypes = {
  data: PropTypes.array.isRequired,
};

export default InfinityList;
