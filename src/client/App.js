import React from 'react';
import TimerClock from './TimerClock/TimerClock';
import SlideShow from './SlideShow/SlideShow';
import "./styles.css";

const App = () => {
  return (
    <div className='App'>
      <TimerClock />
      <SlideShow />
    </div>
  );
}

export default App;
