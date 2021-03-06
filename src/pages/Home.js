import React, { useRef, useState } from 'react';
import heroSliderData from '../Asset/fake-data/hero-slider';
import policy from '../Asset/fake-data/policy';
import productData from '../Asset/fake-data/product';
import Helmet from '../components/Helmet';
import HeroSlider from '../components/HeroSlider';
import Section, { SectionBody, SectionTitle } from '../components/Section';
import PolicyCard from '../components/PolicyCard';
import Grid from '../components/Grid';
import ProductCard from '../components/ProductCard';
import banner from '../Asset/images/banner.png';
import { Link } from 'react-router-dom';
import ButtonSTT from '../components/ButtonSTT';
import ChatBot from '../components/ChatBot';
const Home = () => {
  const newLoadMore=useRef(null)
  const [btnNewLoadMore, setBtnNewLoadMore] = useState(true);
  const handleNewLoadMore = (params) => {
    newLoadMore.current.classList.toggle('active');
    setBtnNewLoadMore(false)
  };

  return (
    <>
      <Helmet title="Trang chủ">
        <HeroSlider
          data={heroSliderData}
          control={true}
          // auto={true}
          timeOut={5000}
        ></HeroSlider>
        <Section>
          <SectionBody>
            <Grid
              col={4}
              mdCol={2}
              smCol={1}
              gap={20}
            >
              {policy.map((item, index) => {
                return (
                  <PolicyCard
                    key={index}
                    name={item.name}
                    description={item.description}
                    icon={item.icon}
                  ></PolicyCard>
                );
              })}
            </Grid>
          </SectionBody>
        </Section>
        <Section>
          <SectionTitle>top sản phẩm bán chạy trong tuần</SectionTitle>
          <SectionBody>
            <Grid
              col={4}
              mdCol={4}
              smCol={2}
              gap={20}
            >
              {productData.getProducts(4).map((item, index) => {
                return (
                  <ProductCard
                    key={index}
                    name={item.name}
                    price={item.price}
                    old_price={item.old_price}
                    discount={item.discount}
                    slug={item.slug}
                    img01={item.image01}
                    img02={item.image02}
                    index={index}
                  ></ProductCard>
                );
              })}
            </Grid>
          </SectionBody>
        </Section>
        <Section>
          <SectionTitle>sản phẩm mới </SectionTitle>
          <SectionBody>
            <Grid
              col={5}
              mdCol={3}
              smCol={2}
              gap={20}
            >
              {productData.getProducts(10).map((item, index) => {
                return (
                  <ProductCard
                    key={index}
                    name={item.name}
                    price={item.price}
                    old_price={item.old_price}
                    discount={item.discount}
                    slug={item.slug}
                    img01={item.image01}
                    img02={item.image02}
                    index={index}
                  ></ProductCard>
                );
              })}
            </Grid>
            {
              btnNewLoadMore ? <button className="btn-load-more" onClick={handleNewLoadMore}>Tải thêm sản phẩm</button> : null
            }
            
          </SectionBody>
          <div className="section__new-load-more" ref={newLoadMore}>
            <SectionBody>
              <Grid
                col={5}
                mdCol={3}
                smCol={2}
                gap={20}
              >
                {productData.getAllProducts().map((item, index) => {
                  return (
                    <ProductCard
                      key={index}
                      name={item.name}
                      price={item.price}
                      old_price={item.old_price}
                      discount={item.discount}
                      slug={item.slug}
                      img01={item.image01}
                      img02={item.image02}
                      index={index}
                    ></ProductCard>
                  );
                })}
              </Grid>
            </SectionBody>
          </div>
        </Section>
        <Section>
          <SectionBody>
            <Link to="./catalog">
              <img
                src={banner}
                alt=""
              />
            </Link>
          </SectionBody>
        </Section>
        <Section>
          <SectionTitle>phổ biến </SectionTitle>
          <SectionBody>
            <Grid
              col={5}
              mdCol={3}
              smCol={2}
              gap={20}
            >
              {productData.getProducts(10).map((item, index) => {
                return (
                  <ProductCard
                    key={index}
                    name={item.name}
                    price={item.price}
                    old_price={item.old_price}
                    discount={item.discount}
                    slug={item.slug}
                    img01={item.image01}
                    img02={item.image02}
                    index={index}
                  ></ProductCard>
                );
              })}
            </Grid>
    
            <button
              className="btn-load-more"
            >
              Tải thêm sản phẩm
            </button>
          </SectionBody>
        </Section>
        <ChatBot></ChatBot>
        <ButtonSTT></ButtonSTT>
      </Helmet>
    </>
  );
};

export default Home;
