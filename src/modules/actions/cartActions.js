export function addItemCart(id, title) {
  return dispatch => {
    dispatch({type: "ADD_ITEM", item: {id, title, quantity: 1}});
  };
}

export function subtractItemCart(id, title) {
  return dispatch => {
    dispatch({type: "SUBTRACT_ITEM", item: {id, title}});
  };
}

export function buyItems(id, title) {
  return dispatch => {
    dispatch({type: "BUY_ITEM"});
  };
}
