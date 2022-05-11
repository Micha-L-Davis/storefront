const initialState = {
  products: [
    {
      category: 'books',
      name: 'lulu-and-muffin',
      displayName: 'Lulu and Muffin #1',
      description: 'The Springdale Sanctuary is home and refuge for the unfortunate animals who lack the skills to be returned to the wild. Lulu, a hyrax, and her penmate Muffin, a koala, must face a tyrannical turtle, malcontent monkeys, pesky patrons and a watchful warden on their quest to find identity and a meaningful place in an artificial world designed for their protection. 16 pages, full color.',
      price: '$4',
      inventoryCount: 228
    },
    {
      category: 'books',
      name: 'be-curious',
      displayName: 'Be Curious - A Comics Anthology',
      description: 'An anthology showcasing the past 10 years of my comics and illustrations. It captures my growth as an artist and highlights the themes which have preoccupied me over that span. 48 pages, b&w.',
      price: '$11',
      inventoryCount: 245
    },
    {
      category: 'prints',
      name: 'seek-tranquility',
      displayName: 'Seek Tranquility',
      description: 'An illustration of the lunar lander at Tranquility Base.',
      price: '$15',
      inventoryCount: 113
    },
    {
      category: 'prints',
      name: 'barn-owl',
      displayName: 'Flight of the Barn Owl',
      description: 'A digital painting of a barn owl flying over a field of dry grass.',
      price: '$15',
      inventoryCount: 87
    },
    {
      category: 'prints',
      name: 'curious-cover',
      displayName: 'Be Curious',
      description: 'An illustration of the Curiosity Mars rover, featured on the cover of the book by the same name.',
      price: '$15',
      inventoryCount: 109
    },
    {
      category: 'prints',
      name: 'race',
      displayName: '... Wins the Race',
      description: 'A whimsical re-imagining of a classic fable.',
      price: '$15',
      inventoryCount: 61
    },
  ],
  hiddenProducts: []
}

function productsReducer(state = initialState, action) {
  let productList = [...state.products, ...state.hiddenProducts]
  switch (action.type) {
    case 'FILTER':
      let showList = productList.filter(product => product.category === action.payload && product.inventoryCount > 0);
      let hideList = productList.filter(product => product.category !== action.payload || product.inventoryCount < 1);
      return { ...state, products: showList, hiddenProducts: hideList };
    case 'VEND':
      let productToVend = productList.filter(product => product.name === action.payload);
      productToVend.inventoryCount--;
      if (productToVend.inventoryCount < 0) productToVend.inventoryCount = 0;
      return state;
    case 'RESTOCK':
      let productToRestock = productList.filter(product => product.name === action.payload);
      productToRestock.inventoryCount++;
      return state;
    default:
      return state;
  }
}

export default productsReducer;
