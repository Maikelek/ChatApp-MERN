import {BrowserRouter,Routes,Route,} from "react-router-dom";
import React from "react";

import Login from "./pages/Login";
import Register from "./pages/Register";

import "./App.css";



function App() {
  return ( 
    <div>
      <BrowserRouter>  
        <Routes>
          <Route path="/*" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;