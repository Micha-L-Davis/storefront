import { Box, Button, Typography } from "@mui/material";
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import { connect } from "react-redux";
import { slideNavDrawer } from "../../store/navDrawer";

function Header({ slideNavDrawer }) {
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
        <Button variant="text" startIcon={<DensityMediumIcon />} onClick={slideNavDrawer} />
        <Typography variant="h3" component="h1" id="store-name">STORE NAME</Typography>
      </Box>
      <Button variant="text">Cart</Button>
    </Box>
  );
};

const mapStateToProps = ({ navDrawer }) => {
  return {
    drawerIsOpen: navDrawer.isOpen
  }
}

const mapDispatchToProps = {
  slideNavDrawer
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
