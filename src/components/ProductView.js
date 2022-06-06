import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import { useNavigate } from 'react-router-dom';
const ProductView = (props) => {
  const product = props.product;
  const [previewImg, setPreviewImg] = useState(product.image01);
  const [descriptionExpand, setDescriptionExpand] = useState(false);
  const [color, setColor] = useState(undefined);
  const [size, setSize] = useState(undefined);
  const [quantity, setQuanity] = useState(1);
  const updateQuanity = (type) => {
    if (type === 'plus') {
      setQuanity(quantity + 1);
    } else {
      setQuanity(quantity - 1 < 1 ? 1 : quantity - 1);
    }
  };
  const handleProductDescriptionClick = () => {
    setDescriptionExpand(!descriptionExpand);
    if (descriptionExpand === true) {
      window.scrollTo(0, 500);
    } else {
      window.scrollTo(0, 1000);
    }
  };
  const navigate = useNavigate();
  const check = () => {
    if (color === undefined) {
      alert('Vui lòng chọn màu sắc');
      return false;
    }
    if (size === undefined) {
      alert('Vui lòng chọn kích cỡ');
      return false;
    }
    return true;
  };
  const addToCart = () => {
    if (check()) console.log({ color, size, quantity });
  };
  const goToCart = () => {
    if (check()) navigate('/cart');
  };
  useEffect(() => {
    setPreviewImg(product.image01);
    setQuanity(1);
    setColor(undefined);
    setSize(undefined);
  }, [product]);
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
      <div className="product__info">
        <div className="product__info__title">{product.name}</div>
        <div className="product__info__item">
          <span className="product__info__item__price">{product.price}</span>
        </div>
        <div className="product__info__item">
          <span className="product__info__item__title">Màu sắc</span>
          <span className="product__info__item__list">
            {product.colors.map((item, index) => {
              return (
                <div
                  className={`product__info__item__list__item ${
                    color === item ? 'active' : ''
                  }`}
                  key={index}
                  onClick={() => setColor(item)}
                >
                  <div className={`circle bg-${item}`}></div>
                </div>
              );
            })}
          </span>
        </div>
        <div className="product__info__item">
          <span className="product__info__item__title">Kích cỡ</span>
          <span className="product__info__item__list">
            {product.size.map((item, index) => {
              return (
                <div
                  className={`product__info__item__list__item ${
                    size === item ? 'active' : ''
                  }`}
                  key={index}
                  onClick={() => setSize(item)}
                >
                  <div className="product__info__item__list__item__size">
                    {item}
                  </div>
                </div>
              );
            })}
          </span>
        </div>
        <div className="product__info__item">
          <span className="product__info__item__title"> Sô lượng</span>
          <div className="product__info__item__quantity">
            <div
              className="product__info__item__quantity__btn"
              onClick={() => updateQuanity('minus')}
            >
              <i className="bx bx-minus"></i>
            </div>
            <div className="product__info__item__quantity__input">
              {quantity}
            </div>
            <div
              className="product__info__item__quantity__btn"
              onClick={() => updateQuanity('plus')}
            >
              <i className="bx bx-plus"></i>
            </div>
          </div>
        </div>
        <div className="product__info__item">
          <Button
            size="sm"
            onClick={() => addToCart()}
          >
            thêm vào giỏ hàng
          </Button>
          <Button
            size="sm"
            onClick={() => goToCart()}
          >
            mua ngay
          </Button>
        </div>
      </div>
      <div
        className={`product__description  mobile ${descriptionExpand ? 'expand ' : ''}`}
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
  );
};

ProductView.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductView;
