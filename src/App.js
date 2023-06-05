
import './App.css';

import User from './Component/User';
import Friends from './Component/Friends';
import Post from './Component/Post';
function App() {
  return (
    <div className="container">
      <User/>
      <Friends/>
      <Post/>
    </div>
  );
}

export default App;
