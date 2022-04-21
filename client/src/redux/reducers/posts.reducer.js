const initialState = {
  loading: false,
  posts: [],
  error: {},
};

const posts = (posts = [], action) => {
  switch (action.type) {
    case "ALL_POSTS":
      return action.payload;
    case "CREATE_POST":
      return [...posts, action.payload];

    default:
      return posts;
  }
};

export default posts;
