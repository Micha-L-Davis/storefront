import { Card, CardContent, CardMedia, Typography, Button } from "@mui/material";
import { Link } from 'react-router-dom'

export default function ProductDetails(props) {

  function handleBuyClick() {
    props.handleBuy(props.product)
  };

  return (
    <>
      <h2>{props.product.name}</h2>
      <Card sx={{
        maxWidth: "300px",
        margin: "auto"
      }}>
        <CardMedia
          component="img"
          image={props.product.image || "https://via.placeholder.com/200"}
          alt={props.product.alt}
        />
        <CardContent>
          <Typography>
            {props.product.description}
          </Typography>
          <Typography>
            Qty: {props.product.inStock}, ${props.product.price}
          </Typography>
        </CardContent>
        <Link to="/"><Button onClick={handleBuyClick}>Buy</Button></Link>
      </Card>
    </>
  );
};
