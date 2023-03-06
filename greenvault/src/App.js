import {Routes,BrowserRouter as Router,Route} from "react-router-dom";
import Homepage from "./js/Homepage";
import Register from './js/Register';
import Login from './js/Login';
import Categories from "./js/Categories";
import Articles from "./js/Articles";

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Register />}/>
          <Route path="/categories" element={<Categories />}/>
          <Route path="/articles" element={<Articles />}/>
          <Route path="/" element={<Homepage />}/>
        </Routes>
      </Router>
  );
}

export default App;