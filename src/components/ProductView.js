import React, {  useState } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
const ProductView = (props) => {
  const product = props.product;
  const [previewImg, setPreviewImg] = useState(product.image01);
  const [descriptionExpand, setDescriptionExpand] = useState(false);
  const handleProductDescriptionClick = () => {
    setDescriptionExpand(!descriptionExpand);
    if (descriptionExpand === true) {
      window.scrollTo(0, 500);
    } else {
      window.scrollTo(0, 1000);
    }
  };

  return (
    <div className="product">
      <div className="product__images">
        <div className="product__images__list">
          <div
            className="product__images__list__item"
            onClick={() => setPreviewImg(product.image01)}
          >
            <img
              src={product.image01}
              alt=""
            />
          </div>
          <div
            className="product__images__list__item"
            onClick={() => setPreviewImg(product.image02)}
          >
            <img
              src={product.image02}
              alt=""
            />
          </div>
        </div>

        <div className="product__images__main">
          <img
            src={previewImg}
            alt=""
          />
        </div>
        <div
          className={`product__description ${
            descriptionExpand ? 'expand ' : ''
          }`}
        >
          <div className="product__description__title">Chi tiết sản phẩm</div>
          <div
            className="product__description__content"
            dangerouslySetInnerHTML={{ __html: product.description }}
          ></div>
          <div className="product__description__toggle">
            <Button
              size="sm"
              onClick={handleProductDescriptionClick}
            >
              {descriptionExpand ? 'Ẩn bớt' : 'Xem thêm'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

ProductView.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductView;
