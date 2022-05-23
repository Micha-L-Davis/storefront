import { Card, CardContent, Box, Typography, Button, CardHeader } from "@mui/material";
import { Link } from 'react-router-dom'
import { useSelector } from "react-redux";
import AddressForm from "./forms/AddressForm"
import PaymentForm from "./forms/PaymentForm"

export default function ShoppingCart() {
  let { cartContents } = useSelector(state => state.cartContents);
  let total = 0;

  return (
    <Card sx={{
      maxWidth: "550px",
      margin: "auto",
      backgroundColor: '#1a1d24',
      color: 'white'
    }}>
      <CardHeader title="Order Summary" />
      <CardContent>
        {
          cartContents.map((product, index) => {
            total += product.price;
            return (
              <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', margin: "2%" }} key={`${product._id}-${index}`}>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'baseline', margin: "2%" }}>
                  <Typography>{`${product.name}`}</Typography>
                  <Typography>{`* (${product.category})`}</Typography>
                </Box>
                <Typography>{`$${product.price}`}</Typography>
              </Box>
            )
          })
        }
        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', margin: "2%" }}>
          <Typography>Total</Typography>
          <Typography>{`$${total}`}</Typography>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
          <AddressForm />
          <PaymentForm />
        </Box>
        <Link to="/"><Button onClick={() => alert("Thank you for your purchase!")}>Place Your Order</Button></Link>
      </CardContent>
    </Card>
  );
}
