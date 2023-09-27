import React, { useState } from "react";
import "./App.css";
 import Form from "./Components/forms";
import Page2 from "./Components/Catagory";
 import { Routes, Route, Navigate } from "react-router-dom";
import Profile from "./Components/Profile"


const App = () => {
   const [formSubmitted, setFormSubmitted] = useState(false);

  return (
     <Routes>
      <Route path="/" element={<Form setFormSubmitted={setFormSubmitted} />} />
      <Route
        path="Page2"
        element={formSubmitted ? <Page2 /> : <Navigate to="/" />}
      />
      <Route path="Profile" element={<Profile/>} ></Route>
    </Routes>
    
  );
};


export default App;





