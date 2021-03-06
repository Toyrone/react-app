export function itemsHasErrored(bool) {
  return {
    type: 'ITEMS_HAS_ERRORED',
    hasErrored: bool
  };
}

export function itemsIsLoading(bool) {
  return {
    type: 'ITEMS_IS_LOADING',
    isLoading: bool
  }
};

export function itemsFetchDataSuccess(items) {
  return {
    type: 'ITEMS_FETCH_DATA_SUCCESS',
    items
  };
}

export function itemsFetchData(url) {
  return (dispatch) => {
    dispatch(itemsIsLoading(true));

    fetch(url)
    .then((blob) => {
      return blob.json()
    })
    .then((response) => {
      // if (!response.ok) {
      //   throw Error(response.statusText);
      // }

      dispatch(itemsIsLoading(false));
      dispatch(itemsFetchDataSuccess(response.items));

      // console.log(response);
    })

  //   fetch(url)
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw Error(response.statusText);
  //       }
  //
  //       dispatch(itemsIsLoading(false));
  //
  //       return response;
  //     })
  //     // .then((response) => console.log(response));
  //     .then((response) => response.json())
  //     .then((items) => dispatch(itemsFetchDataSuccess(items)))
  //     .catch(() => dispatch(itemsHasErrored(true)));
  // };
}
}
