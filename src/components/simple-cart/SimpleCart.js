import { Box, Drawer, Typography, Button } from "@mui/material"
import { useSelector, useDispatch } from "react-redux";
import { slideDrawer, removeFromCart, returnToStock } from "../../store/actions";
import { patchProducts } from '../../store/products';

const drawerWidth = 360;

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
        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
          <Button onClick={handleSlideDrawer}>X</Button>
          <Typography variant="h5" sx={{ margin: '5%' }}>Cart</Typography>
        </Box>
        {
          cartContents.map((product, index) => {
            return (
              <Box sx={{ display: 'flex', flexDirection: 'row' }} key={`${product._id}-${index}`}>
                <Typography>{`${product.name}`}</Typography>
                <Button onClick={() => handleRemoveCartItem(index, product)} key={`button-${index}`} > X</Button>
              </Box>
            )
          })
        }
      </Drawer >
    </Box >
  )
}

export default SimpleCart;
