import React, { useState, useEffect, useRef } from "react";

function Watch() {
  const [isRunning, setRunning] = useState(false);
  const timeIntervalRef = useRef({
    sec: "0",
    min: "0",
    hrs: "0",
  });

  let seconds = timeIntervalRef.current.sec;
  let minutes = timeIntervalRef.current.min;
  let hours = timeIntervalRef.current.hrs;

  function start() {
    setRunning(true);
    useEffect(() => {
      timeIntervalRef.current = setInterval(() => {
        seconds = seconds + 1;
        if (seconds == 60) {
          seconds = 0;
          minutes = minutes + 1;
        }

        if (minutes == 60) {
          minutes = 0;
          hours = hours + 1;
        }
      }, 1000);
    });
  }
  function lapse() {
    if (isRunning == true) {
    }
  }
  function reset() {
    setRunning(true);
  }

  return (
    <div id="stopWatch">
      <h1 className="display">00:00:00</h1>
      <div className="controls">
        <button className="start" onClick={() => start()}>
          Start
        </button>
        <button className="lapse">Lapse</button>
        <button className="reset">Reset</button>
      </div>
      <ol className="timeLapses"></ol>
    </div>
  );
}

export default Watch;
