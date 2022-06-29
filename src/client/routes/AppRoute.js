import React from 'react';
import { Routes, Route } from "react-router-dom";
import TimerClock from '../Components/TimerClock/TimerClock';
import SlideShow from '../Components/SlideShow/SlideShow';
import App from '../Components/App';
import "./styles.css";

const AppRoute = () => {
  return (
    <div className="main">
      <App />
      <div className="content">
        <Routes>
          {/* <Route exact path="/" element={<App />} /> */}
          <Route exact path="/timerclock" element={<TimerClock />} />
          <Route excat path="/slideshow" element={<SlideShow />} />
        </Routes>
      </div>
    </div>
  );
}

export default AppRoute;