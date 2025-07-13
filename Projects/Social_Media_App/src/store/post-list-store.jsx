// post-list-store.jsx
import { createContext, useReducer } from "react";

const PostListContext = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Going To Mumbai",
    body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit...",
    reactions: 3,
    userID: "Vineet_48",
    tags: ["vacations", "mumbai"],
  },
  {
    id: "2",
    title: "Going To Pune",
    body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit...",
    reactions: 5,
    userID: "20Harshal",
    tags: ["job", "pune"],
  },
];

const postListReducer = (currPostList, action) => {
  switch (action.type) {
    case "DELETE_POST":
      return currPostList.filter((post) => post.id !== action.payload.postId);
    case "ADD_POST":
      return [action.payload, ...currPostList];
    default:
      return currPostList;
  }
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );

  const addPost = (userId, postTitle, postBody, reactions, tags) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now().toString(),
        title: postTitle,
        body: postBody,
        reactions: parseInt(reactions, 10),
        userID: userId,
        tags: tags.filter((tag) => tag.trim() !== ""),
      },
    });
  };

  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };

  return (
    <PostListContext.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostListContext.Provider>
  );
};

export { PostListContext }; // ✅ Consistent named export
export default PostListProvider; // ✅ Consistent default export
