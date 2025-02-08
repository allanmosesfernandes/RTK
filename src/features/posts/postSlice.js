import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id: 1,
        author: 'Allan',
        content: 'Text content'
    },
    {
        id: 2,
        author: 'Rollen',
        content: 'More Text content'
    }
];


const postSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        clearPosts: state => {
            state.length = 1;
        }}
    })

export const selectAllPosts = (state) => state.posts;

export const { clearPosts } = postSlice.actions;
export default postSlice.reducer
