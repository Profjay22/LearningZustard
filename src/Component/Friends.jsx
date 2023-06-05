import React from 'react'
import useStore from '../Store/Usestore'
const Friends = () => {
const friends = useStore((state) => state.friends)
const removefriends = useStore((state)=> state.removeFriends)
// const remove = (key) => {
//     console.log(friends);
//    useStore.setState((state)=> ({
//       friends: state.friends.filter(friend => friend.id !== key)
//    })

//     )
// }
  return (

    <div>
        <h1>Friends {friends.length}</h1>
        <div>
            {friends.map((friend) => <span key={friend.id}>{friend.name}
            <button onClick={() => removefriends(friend.id)}>x</button>
            </span>)}
        </div>
    </div>
  )
}

export default Friends