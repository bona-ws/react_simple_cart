export function getItems() {
  return dispatch => {
    dispatch({type: "GET_ITEMS_REQUEST"});

    const API_URL = "https://jsonplaceholder.typicode.com/todos";

    fetch(API_URL)
      .then(response => response.json())
      .then(items => {
        if (items) {
          dispatch({
            type: "GET_ITEMS_SUCCESS",
            items
          });
        } else {
          dispatch({type: "GET_ITEMS_ERROR"});
        }
      })
      .catch(error => {
        dispatch({
          type: "GET_ITEMS_ERROR",
          error
        });
      });
  };
}
