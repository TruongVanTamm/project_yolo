import React from 'react';
import RoutesWrap from '../router/routes';
import Footer from './Footer';
import Header from './Header';

const SetupLayout = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="main">
            <RoutesWrap></RoutesWrap>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default SetupLayout;
