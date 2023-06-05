import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
};

// redux slice that contain reducer and objects that contain our actions

export const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: (state, action) => {
      state.posts.unshift(action.payload);
    },
    removePost: (state, action) => {
      const postId = action.payload.id;
      const postIndex = state.posts.findIndex((fd) => fd.id === postId);
      const newPost = state.posts;
      newPost.splice(postIndex, 1);
      state.posts = newPost;
      console.log(newPost, postIndex, postId);
    },
    editPost: (state, action) => {
      // state.posts.map((post)=>{
      //     post.content = action.payload.content
      // })
      const { postIndex, newData } = action.payload;
      state.posts[postIndex].content = newData;
    },
    likePost: (state, action) => {
      const { postIndex, myId } = action.payload;
      const currentPost = state.posts[postIndex];

      const chechIfLiked = currentPost.likes.findIndex((fd) => fd === myId);
      if (chechIfLiked === -1) {
        currentPost.likes.push(myId);
      } else {
        currentPost.likes.splice(chechIfLiked, 1);
      }

      state.posts[postIndex] = currentPost;
    },
    addComment: (state, action) => {
      const { content, likes, comments, retweet, postIndex } = action.payload;

      state.posts[postIndex].comments.push(action.payload);
    },

    reTweet: (state, action) => {
      const postId = action.payload.id;
      const postIndex = state.posts.findIndex((fd) => fd.id === postId);
      state.posts[postIndex].retweet.push("1");
      state.posts.push({
        ...action.payload,
        comments: [],
        retweet: [],
        likes: [],
        id: Math.floor(Math.random() * 9999999).toString(),
      });
    },
  },
});

// Action creators are generated for each case reducer function
export const { addPost, editPost, likePost, removePost, addComment, reTweet } =
  postSlice.actions;

export default postSlice.reducer;
