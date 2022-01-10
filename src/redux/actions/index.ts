import { 
  REGISTER_USER,
  AUTH_USER,
  USER_LOGOUT,
  // AUTH_USER_SUCCEEDED,
  // AUTH_USER_FAILED,
  GET_ALL_TAGS,
  GET_TAG,
  ADD_TAG,
  UPDATE_TAG,
  DELETE_TAG,
  GET_ALL_POSTS,
  GET_POST,
  ADD_POST,
  UPDATE_POST,
  DELETE_POST,
} from "../../common/ActionTypes";

export function authUser(payload: any) {
  return { type: AUTH_USER, payload };
}

export function logOutUser(payload: any) {
  return { type: USER_LOGOUT, payload };
}

export function registerUser(payload: any) {
  return { type: REGISTER_USER, payload };
}

export function getAllTags(payload: any) {
  return { type: GET_ALL_TAGS, payload };
}

export function getTag(payload: any) {
  return { type: GET_TAG, payload };
}

export function addTag(payload: any) {
  return { type: ADD_TAG, payload };
}

export function updateTag(payload: any) {
  return { type: UPDATE_TAG, payload };
}

export function deleteTag(payload: any) {
  return { type: DELETE_TAG, payload };
}

export function getAllPost(payload: any) {
  return { type: GET_ALL_POSTS, payload };
}

export function getPost(payload: any) {
  return { type: GET_POST, payload };
}

export function addPost(payload: any) {
  return { type: ADD_POST, payload };
}

export function updatePost(payload: any) {
  return { type: UPDATE_POST, payload };
}

export function deletePost(payload: any) {
  return { type: DELETE_POST, payload };
}