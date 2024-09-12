
function cartReducer(state, action) {
  switch (action.type) {
    case "Add":
      return [...state, action.data]
    case "remove":
      return state.filter(remove=> remove.id!== action.id)
    default:
      state
  }
}

export default cartReducer


