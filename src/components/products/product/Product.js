import { Box, Button } from "@mui/material";

export default function Product(props) {
  return (
    <Box sx={{
      minHeight: '100px',
      minWidth: '100px'
    }}>
      <img src="https://via.placeholder.com/200" alt="placeholder"></img>
      <p>{props.product.name}</p>
      <p>{props.product.description}</p>
      <Button>Buy Now</Button>
      <Button>Details</Button>
    </Box>
  );
}
