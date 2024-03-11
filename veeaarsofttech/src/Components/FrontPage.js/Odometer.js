import React, { useEffect, useRef, useState } from "react";
import Odometer from "odometer";
import "odometer/themes/odometer-theme-default.css";
const OdometerComponent = ({ initialValue }) => {
  const odometerRef = useRef(null);
  const [value, setValue] = useState(initialValue || 0);

  useEffect(() => {
    const loadOdometer = async () => {
      if (typeof Odometer === "undefined") {
        await import("odometer");
        new Odometer(odometerRef.current);
      }
    };

    loadOdometer();

    const intervalId = setInterval(() => {
      setValue((prevValue) => prevValue + 100);
    }, 2000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    const odometerInstance = new Odometer({
      el: odometerRef.current,
      value: value || 0,
    });

    return () => {};
  }, [value]);

  return <div ref={odometerRef}></div>;
};

export default OdometerComponent;
