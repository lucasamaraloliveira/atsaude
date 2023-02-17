import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GlobalStyle } from "../GlobalStyle";

import Login from "../pages/Login";
import Signup from "../pages/Signup";


function Rotas () {
  return (
    <Router>
      <GlobalStyle/>    
      <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
};

export default Rotas;

