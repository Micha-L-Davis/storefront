import { Box } from "@mui/material";
import Product from './product/Product'
import { useSelector } from "react-redux";

function Products() {
  let { products } = useSelector(state => state.products);

  return (
    <>
      {/* <ActiveCategory /> */}
      <Box sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 2,
      }}>
        {
          products.map((product, index) => {
            return <Product product={product} key={`${product.name}+${index}`} />
          })
        }
      </Box>
    </>
  );
}


export default Products;
