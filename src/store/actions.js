export const changeCategory = (category) => {
  return {
    type: 'CHANGE_TO',
    payload: category
  };
};

export const addToCart = (product) => {
  return {
    type: 'ADD',
    payload: product
  };
};

export const removeFromCart = (index) => {
  return {
    type: 'REMOVE',
    payload: index
  };
};

export const slideDrawer = (side) => {
  return {
    type: 'SLIDE',
    payload: side
  }
}

export const filterProducts = (category) => {
  return {
    type: 'FILTER',
    payload: category
  };
}

export const takeFromStock = (itemName) => {
  return {
    type: 'VEND',
    payload: itemName
  };
}

export const returnToStock = (itemName) => {
  return {
    type: 'RESTOCK',
    payload: itemName
  };
}
