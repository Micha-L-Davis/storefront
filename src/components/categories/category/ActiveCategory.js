import { Box, Typography } from '@mui/material'
import { connect } from 'react-redux'

function ActiveCategory({ activeCategory, categories }) {
  let { displayName, description } = categories.filter(category => category.name === activeCategory);
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'row',
      padding: '4%',
      marginBottom: '1%',
      alignItems: 'baseline',
    }}>
      <Typography variant="h4" sx={{ marginRight: '5%' }}>{`${displayName}`}</Typography>
      <Typography variant="caption">{`${description}`}</Typography>
    </Box>
  )
}

const mapStateToProps = ({ activeCategory, categories }) => {
  return {
    activeCategory: activeCategory.activeCategory,
    categories: categories.categories
  };
};

export default connect(mapStateToProps)(ActiveCategory);
