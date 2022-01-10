import {
  REGISTER_USER,
  AUTH_USER,
  AUTH_USER_SUCCEEDED,
  USER_LOGOUT,
  AUTH_USER_FAILED,
  // GET_ALL_TAGS,
  // GET_TAG,
  // ADD_TAG,
  // UPDATE_TAG,
  // DELETE_TAG,
  // GET_ALL_POSTS,
  // GET_POST,
  // ADD_POST,
  // UPDATE_POST,
  // DELETE_POST,
  USER_LOGOUT_FAILED,
  USER_LOGOUT_SUCCEEDED
} from "../../common/ActionTypes";

const initialState = {
  user: <any>[],
  tags: <any>[],
  posts: <any>[],
  error: <any>[],
  loading: false,
};

function rootReducer(state = initialState, { type, payload }: any) {
  switch (type) {
    case AUTH_USER:
      return Object.assign({}, state, {
        user: [],
        loading: true,
        error: []
      });
    case AUTH_USER_SUCCEEDED:
      return Object.assign({}, state, {
        user: payload.data,
        loading: false,
        error: []
      });
    case AUTH_USER_FAILED:
      return Object.assign({}, state, {
        user: [],
        loading: false,
        error: payload
      });
    case USER_LOGOUT:
      return Object.assign({}, state, {
        user: [],
        loading: true,
        error: []
      });
    case USER_LOGOUT_SUCCEEDED:
      return Object.assign({}, state, {
        user: [],
        loading: false,
        error: []
      });
    case USER_LOGOUT_FAILED:
      return Object.assign({}, state, {
        user: [],
        loading: false,
        error: payload
      });
    default:
      return state
  }
}

export default rootReducer;