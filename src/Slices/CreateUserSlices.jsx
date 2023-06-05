const CreateUserSlice = ( set, get) => ({

    users: [],
    friends: [],
    fetchUsers: async () => {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        set({users: await res.json()});
    },
    addToFriends: (user) => {

        set({ friends:[ ...new Set( [...get().friends, user])]})
    } ,

    removeFriends: (userID)=> {
        set({friends: get().friends.filter((friends)=> friends.id !== userID)})
    }


})

export default CreateUserSlice