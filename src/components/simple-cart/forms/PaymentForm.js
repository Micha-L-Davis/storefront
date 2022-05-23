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
        Billing Address
      </Typography>
      <TextField id="full-name" label="Full Name" variant="standard" />
      <TextField id="address" label="Address" variant="standard" />
      <TextField id="city" label="City" variant="standard" />
      <TextField id="state" label="State" variant="standard" />
      <TextField id="zip" label="Zip" variant="standard" inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} />
    </Box>
  );
}
