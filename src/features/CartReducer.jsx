
function cartReducer  (state, action) {
  switch (action.type) {
    case "Add":
      return [...state, action.data]

    default:
      state
  }
}

export default cartReducer


