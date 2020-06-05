let initialState = {
  isLoading: false,
  error: null,
  items: []
};

export const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ITEMS_REQUEST":
      return {isLoading: true};

    case "GET_ITEMS_SUCCESS":
      return {
        isLoading: false,
        items: action.items
      };

    case "GET_ITEMS_ERROR":
      return {
        isLoading: false,
        error: action.error
      };

    default:
      return state;
  }
};
