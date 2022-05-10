import { Box, Typography } from '@mui/material'

export default function ActiveCategory() {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'row',
      padding: '4%',
      marginBottom: '1%',
      alignItems: 'baseline',
    }}>
      <Typography variant="h4" sx={{ marginRight: '5%' }}>Category Name</Typography>
      <Typography variant="caption"> This is an example of a category description</Typography>
    </Box>
  )
}
