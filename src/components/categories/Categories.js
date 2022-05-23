import { Box, Drawer, Typography, Button } from "@mui/material"
import Category from "./category/Category";
import drawerSlice from "../../store/drawer.slice";
import productsSlice from "../../store/products.slice";
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";

const drawerWidth = 280;
const { slideDrawer } = drawerSlice.actions;
const { filterProducts } = productsSlice.actions;

function Categories() {
  let { categories } = useSelector(state => state.categories);
  let { leftIsOpen } = useSelector(state => state.drawer);
  let dispatch = useDispatch();

  const handleChangeCategory = (categoryName) => {
    let filterAction = filterProducts(categoryName);
    dispatch(filterAction);

    handleSlideDrawer();
  };

  const handleSlideDrawer = () => {
    let action = slideDrawer('LEFT');
    dispatch(action);
  }

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
        open={leftIsOpen}
      >
        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
          <Typography variant="h5" sx={{ margin: '5%' }}>Categories</Typography>
          <Button onClick={handleSlideDrawer}>X</Button>
        </Box>
        {
          categories.map((category, index) => {
            return (
              <Link to="/" key={`${category._id}-${index}`}>
                <Category categoryName={category.name} /*key={`${category._id}-${index}`}*/ changeCategory={() => handleChangeCategory(`${category.name}`)} />
              </Link>
            )
          })
        }
      </Drawer>
    </Box>
  )
}

export default Categories;
