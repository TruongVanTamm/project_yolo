import React, { useEffect, useRef } from 'react';
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

  const menuLeft = useRef(null);
  const menuToggle = () => {
    menuLeft.current.classList.toggle('active');
  };
  const search = useRef(null);
  const search_input = useRef(null);
  const Search = () => {
    search.current.classList.toggle('active');
    search_input.current.focus();
  };
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
              <i className="bx bx-search" onClick={Search}></i>
              
            </div>
            <div className="header__menu__right__item header__menu__item">
              <Link to="/cart">
                <i className="bx bx-cart"></i>
              </Link>
            </div>
            <div className="header__menu__right__item header__menu__item">
              <i className="bx bx-user"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="search-container " ref={search}>
      <i className="bx bx-chevron-left close-search" onClick={Search}></i>
      <div className="search-content">
        <i className="bx bx-search"></i>
        <input
          type="text"
          placeholder="Search..."
          className="search-input"
          ref={search_input}
        />
      </div>
    </div>
    </div>
  );
};

export default Header;
