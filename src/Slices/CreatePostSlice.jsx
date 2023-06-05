const CreatePostSlice = (set,get) => ({
    post: [],
    postsFromFriends:[],
    fetchPosts: async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await res.json();
      set({ post: data });
    },

    filterPostFromFriends: () => {
        const postsFromFriends = get().post.filter(post=> get().friends.find(friend=> friend.id === post.userId))
       set({postsFromFriends : postsFromFriends})
    }
  });
  
  export default CreatePostSlice;
  