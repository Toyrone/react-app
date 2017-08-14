//=====ACTIONS
function fetchPostsWithRedux() {
  return (dispatch) => {
  dispatch(fetchPostsRequest());
  return fetchPosts().then(([response, json]) => {
    if (response.status === 200){
      dispatch(fetctPostsSuccess(json))
    }
    else {
      dispatch(fetchPostsError())
    }
  })
  }
}

function fetchPosts() {
  const URL = "https://jsonplaceholder.typicode.com/posts";
  return fetch(URL, {method: 'GET'})
    .then(response => Promise.all([response, response.json()]));
}


//======
function fetchPostsRequest() {
  return {
    type: "FETCH_REQUEST"
  }
}

function fetchPostsSuccess(payload) {
  return {
    type: "FETCH_SUCCESS",
    payload
  }
}

function fetchPostsError() {
  return {
    type: "FETCH_ERROR"
  }
}


const reducer = (state = {}, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return state;
    case "FETCH_SUCCESS":
      return {...state, posts: action.payload};
    default:
      return state;
  }
}

connect(mapStateToProps, {fetchPostsWithRedux})(App);
