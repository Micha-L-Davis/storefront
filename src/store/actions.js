export const addToCart = (state, action) => {
  return { ...state, cartContents: [...state.cartContents, action.payload] };
}

export const removeFromCart = (state, action) => {
  let newContents = state.cartContents.filter(item => item !== state.cartContents[action.payload])
  return { ...state, cartContents: newContents }
}

export const slideDrawer = (state, action) => {
  if (action.payload === 'RIGHT') {
    return { ...state, rightIsOpen: !state.rightIsOpen }
  }
  else if (action.payload === 'LEFT')
    return { ...state, leftIsOpen: !state.leftIsOpen }
  else
    return state;
}

export const setCategories = (state, action) => {
  return { ...state, categories: { ...action.payload } }
}

export const setProducts = (state, action) => {
  return { ...state, products: action.payload }
}


export const filterProducts = (state, action) => {
  let productList = [...state.products, ...state.hiddenProducts]
  let showList = productList.filter(product => product.category === action.payload && product.inStock > 0);
  let hideList = productList.filter(product => product.category !== action.payload || product.inStock < 1);

  return { ...state, products: showList, hiddenProducts: hideList };
}

export const takeFromStock = (state, action) => {
  let removedInventory = state.products.map(product => {
    if (product.name === action.payload.name) {
      product.inStock = product.inStock - 1;
    }
    return product;
  });
  return { ...state, products: removedInventory };
}

export const returnToStock = (state, action) => {
  let addedInventory = state.products.map(product => {
    if (product.name === action.payload.name) {
      product.inStock = product.inStock + 1;
    }
    return product;
  });
  return { ...state, products: addedInventory };
}
