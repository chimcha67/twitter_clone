import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    posts: []
}

export const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        addPost: (state, action) => {
            state.posts.unshift(action.payload)
        },
        removePost: (state, action) => {
            const postIndex = action.payload;
            const newPost = state.posts;
            newPost.splice(postIndex, 1)
            state.posts = newPost
        },
        editPost: (state, action) => {
            const { postIndex, newData } = action.payload;
            state.posts[postIndex] = newData;

        },
        likePost: (state, action) => {
            const { postIndex, myId } = action.payload;
            const currentPost = state.posts[postIndex];

            const chechIfLiked = currentPost.likes.findIndex(fd => fd === myId)
            if (chechIfLiked === -1) {
                currentPost.likes.push(myId)
            } else {
                currentPost.likes.splice(chechIfLiked, 1)
            }

            state.posts[postIndex] = currentPost
        },
        addComment: (state, action) => {
            state.posts.push(action.payload)
           
           
        },
        reTweet: (state, action) => {
            state.posts.push(action.payload)
           
        }

    },
})

// Action creators are generated for each case reducer function
export const { addPost, editPost, likePost, removePost, addComment } = postSlice.actions

export default postSlice.reducer