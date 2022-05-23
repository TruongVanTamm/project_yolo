import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

import Grid from './Grid';
import ProductCard from './ProductCard';

const InfinityList = (props) => {
  const perLoad = 8; // items each load

  const listRef = useRef(null);

  const [data, setData] = useState([]);

  const [load, setLoad] = useState(true);

  const [index, setIndex] = useState(0);

  useEffect(() => {
    setData(props.data.slice(0, perLoad));
    setIndex(1);
  }, [props.data]);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (listRef && listRef.current) {
        if (
          window.scrollY + window.innerHeight >=
          listRef.current.clientHeight + listRef.current.offsetTop + 200
        ) {
          setLoad(true);
        }
      }
    });
  }, [listRef]);

  useEffect(() => {
    const getItems = () => {
      const pages = Math.floor(props.data.length / perLoad);
      const maxIndex = props.data.length % perLoad === 0 ? pages : pages + 1;

      if (load && index <= maxIndex) {
        const start = perLoad * index;
        const end = start + perLoad;

        setData(data.concat(props.data.slice(start, end)));
        setIndex(index + 1);
      }
    };
    getItems();
    setLoad(false);
  }, [load, index, data, props.data]);
  return (
    
    <div ref={listRef}>
      <Grid
        col={4}
        mdCol={3}
        smCol={2}
        gap={20}
      >
        {data.map((item, index) => (
          <ProductCard
            key={index}
            name={item.name}
            price={item.price}
            old_price={item.old_price}
            discount={item.discount}
            slug={item.slug}
            img01={item.image01}
            img02={item.image02}
          />
        ))}
      </Grid>
    </div>
  );
};

InfinityList.propTypes = {
  data: PropTypes.array.isRequired,
};

export default InfinityList;
