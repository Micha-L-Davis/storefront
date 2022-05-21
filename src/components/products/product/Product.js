import { Box, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { addToCart, takeFromStock } from "../../../store/actions";
import { patchProducts } from "../../../store/products";

export default function Product(props) {
  const dispatch = useDispatch();

  const handleBuyClick = () => {
    if (props.product.inStock > 0) {
      let addAction = addToCart(props.product);
      dispatch(addAction);

      let takeAction = takeFromStock(props.product);
      dispatch(takeAction);

      let product = { ...props.product }
      product.inStock = props.product.inStock - 1
      dispatch(patchProducts(props.product));
    }
  }

  return (
    <Box sx={{
      minHeight: '100px',
      minWidth: '100px'
    }} key={`${props.product._id}`}>
      <img src="https://via.placeholder.com/200" alt="placeholder"></img>
      <p>{props.product.name}</p>
      <Button onClick={handleBuyClick}>Buy Now</Button>
      <Button>Details</Button>
      <p>Qty: {props.product.inStock}</p>
    </Box>
  );
}
