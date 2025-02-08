import { configureStore } from "@reduxjs/toolkit";
import posts from "../features/posts/postSlice";

const store = configureStore({
    reducer: {
        posts: posts,
    }
})

export default store