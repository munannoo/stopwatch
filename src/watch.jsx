import React, { useState, useEffect, useRef } from "react";

function Watch() {
  const [isRunning, setRunning] = useState(false);
  const [time, setTime] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    clearInterval(intervalRef.current);
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        console.log(time);
        setTime(time + 1);
      }, 1000);
    }
  }, [isRunning, time]);

  function start() {
    setRunning(!isRunning);
    var startOrPause = document.querySelector(".start");
    startOrPause.innerText == "Start"
      ? (startOrPause.innerText = "Stop")
      : (startOrPause.innerText = "Start");
  }
  function laps() {}
  function reset() {
    setRunning(false);
    document.querySelector(".start").innerText = "Start";
    setTime(0);
  }
  function formatTime() {
    let hours = Math.floor(time / 3600);
    let temp = time % 3600;
    let minutes = Math.floor(temp / 60);
    let seconds = temp % 60;

    seconds < 10 ? (seconds = `0${seconds}`) : seconds;
    minutes < 10 ? (minutes = `0${minutes}`) : minutes;
    hours < 10 ? (hours = `0${hours}`) : hours;

    return `${hours}:${minutes}:${seconds}`;
  }
  return (
    <div id="stopWatch">
      <h1 className="display">{formatTime()}</h1>
      <div className="controls">
        <button className="start" onClick={() => start()}>
          Start
        </button>
        <button className="laps">Lapse</button>
        <button className="reset" onClick={() => reset()}>
          Reset
        </button>
      </div>
      <ol className="timeLapses"></ol>
    </div>
  );
}

export default Watch;
