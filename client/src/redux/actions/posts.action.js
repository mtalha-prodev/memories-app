import * as api from "../../api";

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    // console.log(data);

    dispatch({ type: "ALL_POSTS", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createPosts = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);
    console.log(data);

    dispatch({ type: "CREATE_POST", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

// update post action
export const updatePost = (id, post) => async (dispatch) => {
  try {
    const updatePost = await api.updatePost(id, post);
    dispatch({ type: "UPDATE", payload: updatePost });
  } catch (error) {
    console.log(error.message);
  }
};

// delete post action

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);
    dispatch({ type: "DELETE", payload: id });
  } catch (error) {
    console.log(error);
  }
};

// like posts
export const likePosts = (id) => async (dispatch) => {
  try {
    const { data } = await api.likePosts(id);

    dispatch({ type: "LIKE", payload: data });
  } catch (error) {
    console.log(error);
  }
};
