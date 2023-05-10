import { useReducer, useEffect } from "react";
import PostReducerList from "./PostReducerList";
import { ACTION_TYPES } from "./PostActionsTypes";

const API_URL = "https://jsonplaceholder.typicode.com/posts";
const INITIAL_STATE = {
  isLoading: true,
  posts: [],
  error: false,
};

const postReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.FETCH_START:
      return {
        isLoading: true,
        error: false,
        posts: [],
      };
    case ACTION_TYPES.FETCH_SUCCESS:
      return {
        isLoading: false,
        error: false,
        posts: action.payload,
      };
    case ACTION_TYPES.FETCH_ERROR:
      return {
        isLoading: false,
        error: true,
        posts: [],
      };
    case ACTION_TYPES.FETCH_FINALLY:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};

function PostsReducerJson() {
  const [state, dispatch] = useReducer(postReducer, INITIAL_STATE);

  useEffect(() => {
    dispatch({ type: ACTION_TYPES.FETCH_START });
    fetch(API_URL)
      .then((response) => response.json())
      .then((posts) =>
        dispatch({ type: ACTION_TYPES.FETCH_SUCCESS, payload: posts })
      )
      .catch((error) => dispatch({ type: ACTION_TYPES.FETCH_ERROR }))
      .finally(() => dispatch({ type: ACTION_TYPES.FETCH_FINALLY }));
  }, []);

  if (state.error) {
    return <h1>Error:{state.error}</h1>;
  }
  return (
    <>
      <h1>Posts</h1>
      <hr />
      <hr />
      <div className="card_wrapper">
        {state.isLoading ? (
          <h1>Loading...</h1>
        ) : (
          state.posts.map((post) => <PostReducerList key={post.id} {...post} />)
        )}
      </div>
    </>
  );
}

export default PostsReducerJson;
