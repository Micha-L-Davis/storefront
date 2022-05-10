const initialState = {
  isOpen: false
}

function navDrawerReducer(state = initialState, action) {
  switch (action.type) {
    case 'SLIDE':
      return { ...state, isOpen: !state.isOpen }
    default:
      return state;
  }
}

export const slideNavDrawer = () => {
  return {
    type: 'SLIDE',
    payload: null
  }
}

export default navDrawerReducer;
