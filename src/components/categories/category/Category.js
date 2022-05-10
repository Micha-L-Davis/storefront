import { Box, Button } from '@mui/material';

export default function Category(props) {

  const handleClick = () => {
    props.changeCategory();
  }

  return (
    <Box sx={{
      marginTop: '5%',
    }}>
      <Button variant="text" onClick={handleClick}>{`${props.category}`}</Button>
    </Box>
  );
};
