import { useContext } from "react";
import Delete from "./Delete";
import { PostListContext } from '../store/post-list-store'; 

const Post = ({ post }) => {
    const { deletePost } = useContext(PostListContext);

    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 text-center mb-8 mt-5 ms-2">
            <div className="p-5">
                <div className="relative">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {post.title}
                        <span className="absolute -top-3 -right-2 inline-flex items-center py-1 px-1 rounded-full text-xs font-medium transform translate-x-1/2 -translate-y-1/2 bg-blue-800 text-white" onClick={() => { deletePost(post.id) }}>
                            <Delete height={20} width={20}></Delete>
                        </span>
                    </h5>
                </div>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{post.body}</p>
                {post.tags.map(tag => (
                    <span key={tag} className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium mr-1.5 bg-blue-100 text-blue-800 dark:bg-blue-800/30 dark:text-blue-500">
                        <span className="inline-block rounded-full bg-blue-800 dark:bg-blue-500"></span>
                        {tag}
                    </span>
                ))}
                <div className="mt-2 bg-blue-100 border border-blue-200 text-sm text-blue-800 rounded-lg p-4 dark:bg-blue-800/10 dark:border-blue-900 dark:text-blue-500" role="alert" tabIndex="-1">
                    <span className="font-bold">{post.reactions}</span> people has reacted the post.
                </div>
            </div>
        </div>
    );
}

export default Post;