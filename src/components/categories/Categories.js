import { Box, Drawer, Typography, Button } from "@mui/material"
import Category from "./category/Category";
import { connect } from "react-redux";
import { slideNavDrawer } from "../../store/navDrawer";
import { changeCategory } from "../../store/activeCategory";
import { filterProducts } from "../../store/products";

const drawerWidth = 180;

function Categories({ categories, isOpen, slideNavDrawer, changeCategory, filterProducts }) {

  const handleChangeCategory = (categoryName) => {
    changeCategory(categoryName);
    filterProducts(categoryName);
  };

  return (
    <Box>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundColor: '#1a1d24',
            color: 'white'
          },
        }}
        variant="persistent"
        anchor="left"
        open={isOpen}
      >
        <Button onClick={slideNavDrawer}>X</Button>
        <Typography variant="h5" sx={{ margin: '5%' }}>Categories</Typography>
        {
          categories.map((category, index) => {
            return <Category category={category.displayName} key={`${category.name}+${index}`} changeCategory={() => handleChangeCategory(`${category.name}`)} />
          })
        }
      </Drawer>
    </Box>
  )
}

const mapStateToProps = ({ navDrawer, categories }) => {
  return {
    isOpen: navDrawer.isOpen,
    categories: categories.categories
  }
}

const mapDispatchToProps = {
  slideNavDrawer,
  changeCategory,
  filterProducts
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
