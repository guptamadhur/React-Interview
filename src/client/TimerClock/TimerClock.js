import React, { useState, useEffect, useRef } from "react";
import './styles.css';

// https://codesandbox.io/s/lively-rgb-r0ur5i?file=/src/App.js

const TimerClock = () => {

    let timerInterval = useRef();
    const [time, setTime] = useState(1000);
    const [timerOn, setTimerOn] = useState(false);

    useEffect(() => {
        if (time < 1) {
            setTimerOn(false);
            setTime(0);
            timerInterval &&
                timerInterval.current &&
                clearInterval(timerInterval.current);
        }
    }, [time]);

    useEffect(() => {
        // const interval_id = window.setInterval(()=> {}, Number.MAX_SAFE_INTEGER);
        // for (let i = 1; i < interval_id; i++) {
        //   window.clearInterval(i);
        // }

        if (timerOn) {
            timerInterval.current = setInterval(() => {
                setTime((prevTime) => prevTime - 1);
            }, 100);
        }

        return () => {
            clearInterval(timerInterval.current);
        };
    }, [timerOn]);

    return (
        <div className="timer">
            <div>
                <h2>Timer {time} </h2>
                <div>
                    <span onClick={() => setTimerOn(!timerOn)}>
                        {!timerOn ? "Start" : time > 0 ? "Pause" : "Reset"}
                    </span>
                    {time === 0 || !timerOn ? (
                        <span onClick={() => setTime(1000)}> Reset </span>
                    ) : (
                        <></>
                    )}
                </div>
            </div>
        </div>
    );
}

export default TimerClock;
