import { Box, TextField, Typography } from "@mui/material";

export default function AddressForm() {
  return (
    <Box sx={{
      maxWidth: "150px",
      backgroundColor: "gray",
      borderRadius: "3%",
      padding: "3%",
      margin: "2%"
    }}>
      <Typography>
        Payment Details
      </Typography>
      <TextField id="ccnum" label="Credit Card #" variant="standard" inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} />
      <TextField id="expiration" variant="standard" type="date" />
      <TextField id="cvv" label="CVV" variant="standard" inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} />
    </Box>
  );
}
