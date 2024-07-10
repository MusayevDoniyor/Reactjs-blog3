import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [
    {
      id: 1,
      title: "My First Post",
      datetime: "July 01, 2021 11:17:36 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!",
    },
    {
      id: 2,
      title: "My 2nd Post",
      datetime: "July 01, 2021 11:17:36 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!",
    },
    {
      id: 3,
      title: "My 3rd Post",
      datetime: "July 01, 2021 11:17:36 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!",
    },
    {
      id: 4,
      title: "My Fourth Post",
      datetime: "July 01, 2021 11:17:36 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!",
    },
  ],
};

const persistedState = JSON.parse(localStorage.getItem("reduxState"));
const initialPosts = persistedState
  ? persistedState.posts.value
  : initialState.value;

const postsSlice = createSlice({
  name: "posts",
  initialState: {
    value: initialPosts,
  },
  reducers: {
    deletePost: (state, action) => {
      state.value = state.value.filter((post) => post.id !== action.payload);
      saveState(state.value);
      console.log(state.value);
    },
    addPost: (state, action) => {
      state.value = [...state.value, action.payload];
      saveState(state.value);
      console.log(state.value);
    },
  },
});

const saveState = (state) => {
  localStorage.setItem(
    "reduxState",
    JSON.stringify({ posts: { value: state } })
  );
};

export const { deletePost, addPost } = postsSlice.actions;
export default postsSlice.reducer;
