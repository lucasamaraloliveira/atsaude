import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GlobalStyle } from "../GlobalStyle";

import Login from "../pages/Login";


function Rotas () {
  return (
    <Router>
      <GlobalStyle/>    
      <Routes>
      <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default Rotas;

