import React, {  useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from './Button';
import AlertLike from '../components/AlertLike';
const ProductCard = (props) => {
  const [like, setLike] = useState();
  const [activeProduct, setActiveProduct] = useState(0);
  let reset;
  const handleLike = () => {
    setLike(!like);
  };

  const handleProductClick = (index) => {
    setActiveProduct(index);
  };
  const data = [{ img01: props.img01 }, { img02: props.img02 }];

  if (like === false) {
    reset = 'activeAlert';
  }
  return (
    <>
      <AlertLike
        activeAlert={like}
        reset={reset}
      ></AlertLike>
      <div className="product-card">
        <Link to={`/catalog/${props.slug}`}>
          <div className="product-card__img">
            {data.map((item, index) => {
              return (
                <div key={index}>
                  <img
                    src={item.img01}
                    alt=""
                    className={activeProduct === index ? 'active' : null}
                  />
                  <img
                    src={item.img02}
                    alt=""
                    className={activeProduct === index ? 'active' : null}
                  />
                </div>
              );
            })}
          </div>
          <h3 className="product-card__name">{props.name}</h3>
          <div className="product-card__price">
            <span className="product-card__price__old">
              <del>{props.old_price}</del>
            </span>
            {props.price}
          </div>
        </Link>
        <div className="product-card__btn">
          <Button
            size="sm"
            icon="bx bx-cart"
            animate={true}
          >
            chọn mua
          </Button>
        </div>
        <div className="product-card__choice">
          {data.map((item, index) => {
            return (
              <div
                key={index}
                className={`product-card__choice__option`}
              >
                <img
                  src={item.img01}
                  alt=""
                  onClick={() => handleProductClick(index)}
                />
                <img
                  src={item.img02}
                  alt=""
                  onClick={() => handleProductClick(index)}
                />
              </div>
            );
          })}
        </div>
        <div className={props.discount ? 'product-card__sale' : ''}>{props.discount}</div>
        <div
          className="product-card__like"
          onClick={handleLike}
        >
          <i className={like ? 'bx bxs-heart' : 'bx bx-heart'}></i>
        </div>
      </div>
    </>
  );
};
ProductCard.propTypes = {
  img01: PropTypes.string.isRequired,
  img02: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  old_price: PropTypes.string,
  slug: PropTypes.string.isRequired,
  discount: PropTypes.string,
  activeAlert: PropTypes.bool,
};

export default ProductCard;
