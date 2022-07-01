import React from 'react';
import { useNavigate } from "react-router-dom";

const App = () => {
  const navigate = useNavigate();
  return (
    <div className="index">
      <ul>
        <li onClick= {() => navigate("/timerclock")}>Timer Clock</li>
        <li onClick= {() => navigate("/slideshow")}>SlideShow</li>
        <li onClick= {() => navigate("/todo")}>Todo List</li>
        </ul>
    </div>
  );
}

export default App;