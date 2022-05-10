const initialState = {
  activeCategory: null
};

function activeCategoryReducer(state = initialState, action) {
  switch (action.type) {
    case 'CHANGE_TO':
      return { ...state, activeCategory: action.payload }
    default:
      return state;
  }
}

export const changeCategory = (category) => {
  return {
    type: 'CHANGE_TO',
    payload: category
  };
};

export default activeCategoryReducer;
