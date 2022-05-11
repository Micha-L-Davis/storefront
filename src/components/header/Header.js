import { Box, Button, Typography } from "@mui/material";
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import { useSelector, useDispatch } from "react-redux";
import { slideDrawer } from '../../store/actions'

function Header() {
  let { cartContents } = useSelector(state => state.cartContents)
  let dispatch = useDispatch();

  const handleNavDrawer = () => {
    let action = slideDrawer('LEFT');
    dispatch(action);
  }

  const handleCartDrawer = () => {
    let action = slideDrawer('RIGHT');
    dispatch(action)
  }

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: '2%'
    }}>
      <Box sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <Button variant="text" startIcon={<DensityMediumIcon />} onClick={handleNavDrawer} />
        <Typography variant="h3" component="h1" id="store-name">STORE NAME</Typography>
      </Box>
      <Button variant="text" onClick={handleCartDrawer}>Cart ({`${cartContents.length}`})</Button>
    </Box>
  );
};

export default Header;
