import { useSelector, useDispatch } from 'react-redux';
// import { clearPosts, addPost } from "./postsSlice";
// import { useState } from "react";
import { selectAllPosts } from './postSlice';

const Posts = () => {
    const posts = useSelector(selectAllPosts);

    const renderedPosts = posts.map((post) => {});
    return (
        <div>
            <h2>Posts</h2>
        </div>
    );
};

export default Posts;
