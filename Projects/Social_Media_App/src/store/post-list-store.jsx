import { createContext , useReducer } from "react";


const PostList = createContext( {
    postList: [],
    addPost: () => { },
    deletePost: () => { },
}
);

const postListReducer = (currPostList , action) => {
    return currPostList;
}

const PostListProvider = ({ children }) => {
    const addPost = () => {

    }
    const deletePost = () => {

    }

    const [postList, dispatchPostList] = useReducer(postListReducer, []);
  


    return (
        <PostList.Provider value={{
            postList,
            addPost,
            deletePost
        }}>

            {children}


        </PostList.Provider>

    )
}

export default PostListProvider;