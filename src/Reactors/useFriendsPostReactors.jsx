import  {useEffect} from 'react'

import useStore from '../Store/Usestore'

const useFriendsPostReactors = () => {
    const friends = useStore((store) => store.friends);
    const posts = useStore((store) => store.posts);
    const postsFromFriends = useStore((store) => store.postsFromFriends);
    const filterPostFromFriends = useStore(store => store.filterPostFromFriends);

    useEffect(()=>{
        filterPostFromFriends()
    }, [friends, posts, filterPostFromFriends])
    
  return postsFromFriends
}

export default useFriendsPostReactors