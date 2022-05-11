import { Box, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { addToCart, takeFromStock } from "../../../store/actions";

export default function Product(props) {
  const dispatch = useDispatch();

  const handleBuyClick = (product) => {
    let addAction = addToCart(product);
    dispatch(addAction);

    let takeAction = takeFromStock(product);
    dispatch(takeAction);
  }

  return (
    <Box sx={{
      minHeight: '100px',
      minWidth: '100px'
    }}>
      <img src="https://via.placeholder.com/200" alt="placeholder"></img>
      <p>{props.product.displayName}</p>
      <p>{props.product.description}</p>
      <Button onClick={() => handleBuyClick(props.product)}>Buy Now</Button>
      <Button>Details</Button>
    </Box>
  );
}
