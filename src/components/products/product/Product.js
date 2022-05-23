import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom"

export default function Product(props) {

  const handleBuyClick = () => {
    props.handleBuy(props.product);
  }

  const handleDetailClick = () => {
    props.handleDetail(props.product);
  }

  return (
    <Box sx={{
      minHeight: '100px',
      minWidth: '100px'
    }} key={`${props.product._id}`}>
      <img src="https://via.placeholder.com/200" alt="placeholder"></img>
      <p>{props.product.name}</p>
      <Button onClick={handleBuyClick}>Buy Now</Button>
      <Link to={`/products/${props.product._id}`}><Button onClick={handleDetailClick}>Details</Button></Link>
      <p>Qty: {props.product.inStock}</p>
    </Box>
  );
}
