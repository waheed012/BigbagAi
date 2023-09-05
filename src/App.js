import Login from "./Pages/Login";
import Register from "./Pages/Register";
import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Home from "./Pages/Home";
function App() {
  const { isAuthenticated, user } = useSelector((state) => state.user);
  return (
    <div>
    {!isAuthenticated && (
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/registration" element={<Register />} /> */}
      </Routes>
    )}
    {isAuthenticated &&(
      <Routes>
        {/* <Route path="/home" element={<Home />} /> */}
      </Routes>
    )}
  </div>
  );
}

export default App;
