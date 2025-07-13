import Delete from "./Delete";

const Post = ({ post }) => {
    return (


        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 text-center mb-8" >
            <a href="#">
                <img className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
            </a>
            <div className="p-5">


                <div className="relative">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {post.title}
                        <span className="absolute -top-3 -right-2 inline-flex items-center py-1 px-1 rounded-full text-xs font-medium transform translate-x-1/2 -translate-y-1/2 bg-blue-800 text-white">
                         <Delete height={20} width={20}></Delete>
                        </span>
                    </h5>
                </div>

                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{post.body}</p>
                {post.tags.map(tag => <span class="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium mr-1.5 bg-blue-100 text-blue-800 dark:bg-blue-800/30 dark:text-blue-500">
                    <span class="size-1.5 inline-block rounded-full bg-blue-800 dark:bg-blue-500"></span>
                    {tag}
                </span>)}
            </div>
        </div>
            
    )
}

export default Post;                                                                                        