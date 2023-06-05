import create from "zustand"
import CreateUserSlice from "../Slices/CreateUserSlices"
import CreatePostSlice from "../Slices/CreatePostSlice"
 const useStore = create((get, set)=>({
    ...CreateUserSlice(get, set),
    ...CreatePostSlice(get, set)

 }))

 export default useStore