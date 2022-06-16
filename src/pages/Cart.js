import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Helmet from '../components/Helmet';
import Button from '../components/Button';
import numberWithCommas from '../utils/numberWithCommas';
import { GlobalState } from '../GlobalState';
import axios from 'axios';
import PaypalButton from '../components/PaypalButton';

const Cart = () => {
  const state = useContext(GlobalState);
  const [cart, setCart] = state.userAPI.cart;
  const [token] = state.token;
  const [total, setTotal] = useState(0);
  useEffect(() => {
    const getTotal = () => {
      const total = cart.reduce((prev, item) => {
        return prev + item.price * item.quantity;
      }, 0);

      setTotal(total);
    };

    getTotal();
  }, [cart]);
  const addToCart = async (cart) => {
    await axios.patch(
      '/user/addcart',
      { cart },
      {
        headers: { Authorization: token },
      }
    );
  };
  const increment = (id) => {
    cart.forEach((item) => {
      if (item.id === id) {
        item.quantity += 1;
      }
    });

    setCart([...cart]);
    addToCart(cart);
  };

  const decrement = (id) => {
    cart.forEach((item) => {
      if (item.id === id) {
        item.quantity === 1 ? (item.quantity = 1) : (item.quantity -= 1);
      }
    });

    setCart([...cart]);
    addToCart(cart);
  };
  const removeProduct = (id) => {
    if (window.confirm('Xóa sản phẩm khỏi giỏ hàng?')) {
      cart.forEach((item, index) => {
        if (item.id === id) {
          cart.splice(index, 1);
        }
      });

      setCart([...cart]);
      addToCart(cart);
    }
  };

  const tranSuccess = async (payment) => {
    const { paymentID, address } = payment;

    await axios.post(
      '/api/payment',
      { cart, paymentID, address },
      {
        headers: { Authorization: token },
      }
    );
    setCart([]);
    addToCart([]);
    alert('Bạn đã đặt hàng thành công.');
  };
  if (cart.length === 0)
    return (
      <h2 style={{ textAlign: 'center', fontSize: '5rem' }}>Cart Empty</h2>
    );
  return (
    <Helmet title="Giỏ hàng">
      <div className="cart">
        <div className="cart__info">
          <div className="cart__info__txt">
            <p>Bạn đang có sản phẩm trong giỏ hàng</p>
            <div className="cart__info__txt__price">
              <span>Thành tiền:</span>{' '}
              <span>
                <strong>${numberWithCommas(Number(total))}</strong>
              </span>
            </div>
          </div>
          <div className="cart__info__btn">
            <Button size="sm">Đặt hàng</Button>
            <PaypalButton
              total={total}
              tranSuccess={tranSuccess}
            />
            <Link to="/catalog">
              <Button size="sm">Tiếp tục mua hàng</Button>
            </Link>
          </div>
        </div>
        <div className="cart__list">
          {cart.map((product, index) => (
            <div
              className="cart__list__item"
              key={index}
            >
              <div className="cart__list__item__img">
                <img
                  src={product.image01}
                  alt=""
                />
              </div>

              <div className="cart__list__item__detail">
                <div className="cart__list__item__detail__info">
                  <p>
                    {' '}
                    <span>Sản phẩm : </span> {product.name}
                  </p>
                  <p>
                    {' '}
                    <span>Màu sắc: </span> {product.color}
                  </p>
                  <p>
                    {' '}
                    <span>Kích cỡ: </span>
                    {product.size}
                  </p>
                </div>

                <div className="cart__list__item__detail__amount">
                  <button onClick={() => decrement(product.id)}> - </button>
                  <span>{product.quantity}</span>
                  <button onClick={() => increment(product.id)}> + </button>
                </div>
                <div className="cart__list__item__detail__price">
                  <h3>${product.price * product.quantity}</h3>
                </div>
                <div
                  className="cart__list__item__detail__delete"
                  onClick={() => removeProduct(product.id)}
                >
                  <i className="bx bx-trash"></i>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Helmet>
  );
};

export default Cart;
