import { Box, Drawer, Typography, Button } from "@mui/material"
import { useSelector, useDispatch } from "react-redux";
import drawerSlice from "../../store/drawer.slice";
import cartContentsSlice from "../../store/cartContents.slice";
import productsSlice from "../../store/products.slice";
import { Link } from 'react-router-dom';
//import { patchProducts } from '../../store/products';

const drawerWidth = 360;
const { slideDrawer } = drawerSlice.actions;
const { removeFromCart } = cartContentsSlice.actions;
const { returnToStock } = productsSlice.actions;

function SimpleCart() {

  let { cartContents } = useSelector(state => state.cartContents);
  let { rightIsOpen } = useSelector(state => state.drawer);
  let dispatch = useDispatch();

  const handleSlideDrawer = () => {
    let action = slideDrawer('RIGHT');
    dispatch(action);
  }

  const handleRemoveCartItem = (cartIndex, product) => {
    let removeAction = removeFromCart(cartIndex);
    dispatch(removeAction);

    let restockAction = returnToStock(product);
    dispatch(restockAction);

    // let thisProduct = { ...product };
    // thisProduct.inStock = product.inStock + 1
    // dispatch(patchProducts(thisProduct));
  }

  return (
    <Box>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundColor: '#1a1d24',
            color: 'white'
          },
        }}
        variant="persistent"
        anchor="right"
        open={rightIsOpen}
      >
        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
          <Button onClick={handleSlideDrawer}>X</Button>
          <Typography variant="h5" sx={{ margin: '5%' }}>Cart Contents</Typography>
        </Box>
        {
          cartContents.map((product, index) => {
            return (
              <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }} key={`${product._id}-${index}`}>
                <Typography>{`${product.name}`}</Typography>
                <Button onClick={() => handleRemoveCartItem(index, product)} key={`button-${index}`} > X</Button>
              </Box>
            )
          })
        }
        {cartContents.length > 0 && <Link to={`/cart`}><Button onClick={handleSlideDrawer}>Check Out</Button></Link>}
      </Drawer >
    </Box >
  )
}

export default SimpleCart;
