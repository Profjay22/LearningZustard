import React, {useEffect} from 'react'
import useStore from '../Store/Usestore'
const User = () => {

    const user = useStore((state) => state.users);
    const fetchUsers = useStore((state) => state.fetchUsers)
    const friends = useStore((state) => state.addToFriends);
    useEffect(()=> {
        fetchUsers()
    }, [fetchUsers]);
//     const [user, setUser] = useState();

//     const fetchuserdata = async () => {
//         const res = await fetch ("https://jsonplaceholder.typicode.com/users");

//         let data = await res.json();
//         console.log(data);
//         console.log(res)

//         setUser(data);
//     }

//    useEffect(()=> {
//     fetchuserdata();
//    }, []);

  return (
    <div>
        <h1>User Date</h1>
        {
            user ? (
                <ul>
                {
                    user.map((user)=> (
                        <li key={user.id} onClick={() => friends(user) }>{user.name}</li>
                    ))
                }
              </ul>
            ) : (
                <p> User is loading .....</p>
            )
        }
 

  </div>
  )
}

export default User