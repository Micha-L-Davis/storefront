const initialState = {
  categories: [
    {
      name: 'books',
      displayName: 'Books',
      description: 'All books are printed on high-quality matte-finish paper and staple bound. Signed copies available on request.',
    },
    {
      name: 'prints',
      displayName: 'Prints',
      description: 'Prints are available in 8 x 10 or 16 x 20 on heavy satin finish paper',
    }
  ]
}

function categoriesReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default categoriesReducer;
