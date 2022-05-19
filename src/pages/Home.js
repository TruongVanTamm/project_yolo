import React from 'react';
import heroSliderData from '../Asset/fake-data/hero-slider';
import policy from '../Asset/fake-data/policy';
import productData from '../Asset/fake-data/product';
import Helmet from '../components/Helmet';
import HeroSlider from '../components/HeroSlider';
import Section, { SectionBody, SectionTitle } from '../components/Section';
import PolicyCard from '../components/PolicyCard';
import Grid from '../components/Grid';
import ProductCard from '../components/ProductCard';
import Button from '../components/Button';
import banner from '../Asset/images/banner.png';
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <Helmet title="Trang chủ">
      {/* ----------------------------------------- HeroSlider------------------------------------- */}
      <HeroSlider
        data={heroSliderData}
        control={true}
        auto={false}
        timeOut={5000}
      ></HeroSlider>
      {/* ----------------------------------------- HeroSlider------------------------------------- */}
      {/* ----------------------------------------- Policy card------------------------------------- */}
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
      {/* ----------------------------------------- Policy card------------------------------------- */}
      {/* ----------------------------------------- Poroduct card-------------------------------------      */}
      <Section>
        <SectionTitle>top sản phẩm bán chạy trong tuần</SectionTitle>
        <SectionBody>
          <Grid
            col={4}
            mdCol={2}
            smCol={1}
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
      {/* ----------------------------------------- Poroduct card------------------------------------- */}
      {/* ----------------------------------------- New Product------------------------------------- */}
      <Section>
        <SectionTitle>sản phẩm mới </SectionTitle>
        <SectionBody>
          <Grid
            col={4}
            mdCol={2}
            smCol={1}
            gap={20}
          >
            {productData.getProducts(8).map((item, index) => {
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

          <Button icon="bx bx-cart"> Tải thêm sản phẩm</Button>
        </SectionBody>
      </Section>
      {/* ----------------------------------------- New Product------------------------------------- */}
      {/* ---------------------------------------------Banner------------------------------------------------- */}
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
            col={4}
            mdCol={2}
            smCol={1}
            gap={20}
          >
            {productData.getProducts(8).map((item, index) => {
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

          <Button icon="bx bx-cart"> Tải thêm sản phẩm</Button>
        </SectionBody>
      </Section>
    </Helmet>
  );
};

export default Home;
