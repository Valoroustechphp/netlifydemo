import logo from './logo.svg';
import './App.css';
import PostList from './components/postlist';
import { BrowserRouter as Router, Route } from "react-router-dom"
function App() {
  return (
    <div className="App">
      <h1>Netlify React  Blog Post</h1>
      <Router>
        <PostList />
      </Router>
    </div>
  );
}

export default App;
