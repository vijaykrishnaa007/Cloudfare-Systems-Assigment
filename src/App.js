import { Router } from "@reach/router";

import Posts from './components/posts'
import Post from './components/newpost'
function App() {
  return (
    <Router>
      <Posts path="/" />
      <Post path="/newpost" />
    </Router>
  );
}

export default App;