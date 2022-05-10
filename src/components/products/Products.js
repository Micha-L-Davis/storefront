import { Box } from "@mui/material";
import Product from './product/Product'
import ActiveCategory from "../categories/category/ActiveCategory";
import { connect } from "react-redux";


function Products({ products }) {
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

const mapStateToProps = ({ products }) => {
  return { products: products.products }
}

export default connect(mapStateToProps)(Products);
