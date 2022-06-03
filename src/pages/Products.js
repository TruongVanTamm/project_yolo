import React from 'react';
import Helmet from '../components/Helmet';
import productData from '../Asset/fake-data/product';
import Section, { SectionBody, SectionTitle } from '../components/Section';
import Grid from '../components/Grid';
import ProductCard from '../components/ProductCard';
import { useParams } from 'react-router-dom';
import ProductView from '../components/ProductView';
const Product = () => {
  const params = useParams();
  const product = productData.getProductBySlug(params.slug);
  const relatedProducts = productData.getProducts(12);
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [product]);

  return (
      <Helmet title={product.name}>
        <Section>
          <SectionBody>
            <ProductView product={product} />
          </SectionBody>
        </Section>
        <Section>
          <SectionTitle>Khám phá thêm</SectionTitle>
          <SectionBody>
            <Grid
              col={6}
              mdCol={3}
              smCol={2}
              gap={20}
            >
              {relatedProducts.map((item, index) => (
                <ProductCard
                  key={index}
                  name={item.name}
                  price={item.price}
                  old_price={item.old_price}
                  discount={item.discount}
                  slug={item.slug}
                  img01={item.image01}
                  img02={item.image02}
                ></ProductCard>
              ))}
            </Grid>
          </SectionBody>
        </Section>
      </Helmet>
  );
};

export default Product;
