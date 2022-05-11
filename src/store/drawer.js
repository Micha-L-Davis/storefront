const initialState = {
  rightIsOpen: false,
  leftIsOpen: false
}

function drawerReducer(state = initialState, action) {
  switch (action.type) {
    case 'SLIDE':
      if (action.payload === 'RIGHT') {
        return { ...state, rightIsOpen: !state.rightIsOpen }
      }
      else if (action.payload === 'LEFT')
        return { ...state, leftIsOpen: !state.leftIsOpen }
      else
        return state;
    default:
      return state;
  }
}

export default drawerReducer;
