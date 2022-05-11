const initialState = {
  cartContents: []
};

function cartContentsReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD':
      return { ...state, cartContents: [...state.cartContents, action.payload] };
    case 'REMOVE':
      let newContents = state.cartContents.filter(item => item !== state.cartContents[action.payload])
      return { ...state, cartContents: newContents }
    default:
      return state;
  }
}

export default cartContentsReducer;
