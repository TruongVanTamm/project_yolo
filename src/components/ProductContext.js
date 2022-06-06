
// export default ProductContext
import { createContext, useState } from 'react';
const ProductProvider = createContext();
function ProductContext({ children }) {
  const [like, setLike] = useState();
  const handleLike = () => {
    setLike(!like);
  };
  const values = {
    like,
    handleLike,
  };
  return (
    <ProductProvider.Provider value={values}>
      {children}
    </ProductProvider.Provider>
  );
}
export { ProductProvider, ProductContext };
