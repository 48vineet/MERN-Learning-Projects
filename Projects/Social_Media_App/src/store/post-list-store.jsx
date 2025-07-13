import { createContext, useReducer } from "react";


export const PostList = createContext({
    postList: [],
    addPost: () => { },
    deletePost: () => { },
}
);

const postListReducer = (currPostList, action) => {
    return currPostList;
}

const PostListProvider = ({ children }) => {
    const addPost = () => {

    }
    const deletePost = () => {

    }

    const [postList, dispatchPostList] = useReducer(postListReducer, DEFAULT_POST_LIST);



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

const DEFAULT_POST_LIST = [
    {
        id: '1',
        title: 'Going To Mumbai',
        body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, rem doloremque? Ipsam temporibus consectetur architecto laudantium aspernatur iure ut delectus numquam, quod, sint explicabo, quidem neque accusantium corrupti eius reiciendis?i ',
        reactions: 3,
        userID: 'Vineet_48',
        tags: ['vacations', 'mumbai'],

    },
    {
        id: '2',
        title: 'Going To Pune',
        body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, rem doloremque? Ipsam temporibus consectetur architecto laudantium aspernatur iure ut delectus numquam, quod, sint explicabo, quidem neque accusantium corrupti eius reiciendis?i ',
        reactions: 5,
        userID: '20Harshal',
        tags: ['job', 'pune'],

    }
];

export default PostListProvider;

