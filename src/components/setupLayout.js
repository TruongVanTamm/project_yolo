import React from 'react';
import RoutesWrap from '../router/routes';
import Footer from './Footer';
import Header from './Header';
import ProductViewModal from './ProductViewModal';

const SetupLayout = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="main">
            <RoutesWrap></RoutesWrap>
        </div>
      </div>
      <ProductViewModal></ProductViewModal>
      <Footer></Footer>
    </div>
  );
};

export default SetupLayout;
