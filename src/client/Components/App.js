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
        <li onClick= {() => navigate("/messagecard")}>Message Card</li>
        <li onClick= {() => navigate("/CustomHook")}>Custom Hook</li>
        </ul>
    </div>
  );
}

export default App;