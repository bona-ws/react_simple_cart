let initialState = {
  addedItems: [{}],
  total: 0
};

export const cartReducer = (state = initialState, action) => {
  const data = action.item;
  let addedItem;

  switch (action.type) {
    case "ADD_ITEM":
      addedItem = state.addedItems.find(item => item.id === action.item.id);

      if (addedItem) {
        addedItem.quantity += 1;
      }
      return {
        ...state,
        addedItems: addedItem
          ? [...state.addedItems]
          : [...state.addedItems, data],
        total: (state.total += 1)
      };

    case "SUBTRACT_ITEM":
      addedItem = state.addedItems.find(item => item.id === action.item.id);

      if (addedItem && addedItem.quantity > 0) {
        addedItem.quantity -= 1;
        state.total -= 1;
        return {
          ...state,
          addedItems: addedItem
            ? [...state.addedItems]
            : [...state.addedItems, data],
          total: state.total
        };
      } else {
        return state;
      }

    case "BUY_ITEM":
      return {
        addedItems: [{}],
        total: 0
      };

    default:
      return state;
  }
};
