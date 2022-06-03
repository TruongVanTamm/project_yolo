import React, { useEffect, useRef} from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../Asset/images/Logo-2.png';
const mainNav = [
  {
    display: 'Trang chủ',
    path: '/',
  },
  {
    display: 'Sản phẩm',
    path: '/catalog',
  },
  {
    display: 'Phụ kiện',
    path: '/accessories',
  },
  {
    display: 'Liên hệ',
    path: '/contact',
  },
];
const Header = () => {
  const { pathname } = useLocation();
  const activeNav = mainNav.findIndex((e) => e.path === pathname);
  const headerRef = useRef(null);
  
  const menuLeft = useRef(null);
  const menuToggle = () => {
    menuLeft.current.classList.toggle('active');
  };
  const userOption = useRef(null);
  const UserOptionToggle = () => {
    userOption.current.classList.toggle('active');
  };
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add('shrink');
      } else {
        headerRef.current.classList.remove('shrink');
      }
    });
    return () => window.addEventListener('scroll');
  }, []);
  return (
    <div
      className="header"
      ref={headerRef}
    >
      <div className="container">
        <div className="header__logo">
          <Link to="/">
            <img
              src={logo}
              alt=""
            />
          </Link>
        </div>
        <div className="header__menu">
          <div
            className="header__menu__mobile-toggle"
            onClick={menuToggle}
          >
            <i className="bx bx-menu"></i>
          </div>
          <div
            className="header__menu__left "
            ref={menuLeft}
          >
            <div
              className="header__menu__left-close"
              onClick={menuToggle}
            >
              <i className="bx bx-chevron-left"></i>
            </div>

            {mainNav.map((item, index) => {
              return (
                <div
                  className={`header__menu__left__item header__menu__item ${
                    index === activeNav ? 'active' : ''
                  }`}
                  key={index}
                  onClick={menuToggle}
                >
                  <Link to={item.path}>
                    <span className="header__menu__item">{item.display}</span>
                  </Link>
                </div>
              );
            })}
          </div>
          <div className="header__menu__right">
            <div className="header__menu__right__item header__menu__item">
              <i className="bx bx-search"></i>
            </div>
            <div className="header__menu__right__item header__menu__item">
              <Link to="/cart">
                <i className="bx bx-cart"></i>
              </Link>
            </div>
            <div
              className="header__menu__right__item header__menu__item"
              onClick={UserOptionToggle}
            >
              <i className="bx bx-user"></i>
              <div
                className="header__menu__right__item__user-option"
                ref={userOption}
              >
                <ul className='header__menu__right__item__user-option__list'>
                <Link to='/signin'>
                      Đăng nhập
                  </Link>
                  <Link to='/signup'>
                      Đăng kí
                  </Link>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
